import { useEffect, useRef } from "react";

const FloatingBall = () => {
  const ballRef = useRef(null); // Reference to the ball element
  const mouseRef = useRef({ x: 0, y: 0 }); // Store the mouse position
  const ballPosRef = useRef({ x: 0, y: 0 }); // Store the ball's position
  const speed = 0.05; // Adjust the speed (lower = slower, smoother)
  const animationFrameRef = useRef(null); // Reference for animation frame

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animate the ball
  useEffect(() => {
    const animate = () => {
      // Calculate distance between ball and mouse
      const distX = mouseRef.current.x - ballPosRef.current.x;
      const distY = mouseRef.current.y - ballPosRef.current.y;

      // Update ball position with linear interpolation
      ballPosRef.current.x += distX * speed;
      ballPosRef.current.y += distY * speed;

      // Apply the updated position to the ball element
      if (ballRef.current) {
        ballRef.current.style.transform = `translate(
          ${ballPosRef.current.x}px, 
          ${ballPosRef.current.y}px
        )`;
      }

      // Request the next frame
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    // Cleanup animation frame on unmount
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 pointer-events-none">
      <div
        ref={ballRef}
        className="absolute  w-3 h-3 bg-amber-500 rounded-full shadow-lg  mix-blend-difference"
        style={{
          transform: "translate(-50%, -50%)", // Center the ball
        }}
      ></div>
    </div>
  );
};

export default FloatingBall;
