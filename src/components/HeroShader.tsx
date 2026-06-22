"use client";

import { useEffect, useRef } from "react";

const fragmentShaderSource = `
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;

// Simplex 2D noise
//
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    st.x *= u_resolution.x / u_resolution.y;

    vec2 pos = st * 2.0;
    
    // Create multiple layers of noise
    float n1 = snoise(pos + u_time * 0.15);
    float n2 = snoise(pos * 2.0 - u_time * 0.2);
    float n3 = snoise(pos * 4.0 + u_time * 0.1);
    
    // Combine noise
    float n = n1 * 0.5 + n2 * 0.25 + n3 * 0.125;
    n = n * 0.5 + 0.5; // map to 0-1
    
    // Colors
    vec3 bgBase = vec3(0.02, 0.035, 0.08); // Very dark blue
    vec3 color1 = vec3(0.05, 0.1, 0.2);    // Dark blue
    vec3 color2 = vec3(0.12, 0.82, 0.90);  // Primary Cyan
    vec3 color3 = vec3(0.08, 0.4, 0.6);    // Mid blue
    
    // Color mixing based on noise
    vec3 finalColor = mix(bgBase, color1, n);
    finalColor = mix(finalColor, color2, smoothstep(0.4, 1.0, n) * 0.4);
    finalColor = mix(finalColor, color3, smoothstep(0.7, 1.0, n));
    
    // Add subtle vignette
    vec2 center = vec2(0.5 * (u_resolution.x/u_resolution.y), 0.5);
    float dist = length(st - center);
    finalColor -= dist * 0.15;
    
    gl_FragColor = vec4(finalColor, 1.0);
}
`;

const vertexShaderSource = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const HeroShader = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) return;

    // Compile Shader function
    const compileShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Set up rectangle
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    let animationFrameId: number;
    let startTime = performance.now();
    let isVisible = true;
    let lastRenderTime = startTime;
    let accumulatedTime = 0;

    const resize = () => {
      if (!canvas) return;
      const { innerWidth, innerHeight } = window;
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      
      // Update CSS size to prevent infinite resize loop
      canvas.style.width = `${innerWidth}px`;
      canvas.style.height = `${innerHeight}px`;
      
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    };

    window.addEventListener("resize", resize);
    resize();

    const render = (time: number) => {
      if (!isVisible) return;
      
      const deltaTime = time - lastRenderTime;
      lastRenderTime = time;
      accumulatedTime += deltaTime;

      gl.uniform1f(timeLocation, accumulatedTime / 1000);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible) {
            lastRenderTime = performance.now();
            animationFrameId = requestAnimationFrame(render);
          } else {
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0 }
    );
    
    observer.observe(canvas);

    return () => {
      window.removeEventListener("resize", resize);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-80 mix-blend-screen"
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default HeroShader;
