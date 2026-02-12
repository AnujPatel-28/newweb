'use client';

import React, { useEffect, useRef } from 'react';

export default function NeuralNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const nodes: Node[] = [];
        const maxDist = 150;
        const numNodes = Math.floor(width * height / 25000); // Density based on screen size

        // Mouse state
        const mouse = { x: -1000, y: -1000 };

        class Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            baseX: number;
            baseY: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; // Slow movement
                this.vy = (Math.random() - 0.5) * 0.5;
                this.baseX = this.x;
                this.baseY = this.y;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 200) {
                    const angle = Math.atan2(dy, dx);
                    const force = (200 - dist) / 200;
                    // Push away slightly
                    this.x -= Math.cos(angle) * force * 2;
                    this.y -= Math.sin(angle) * force * 2;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(4, 67, 150, 0.4)';
                ctx.fill();
            }
        }

        // Initialize nodes
        for (let i = 0; i < numNodes; i++) {
            nodes.push(new Node());
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw connections first
            nodes.forEach((node, i) => {
                node.update();
                node.draw();

                // Connect to nearby nodes
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[j].x - node.x;
                    const dy = nodes[j].y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        // Opacity based on distance
                        const alpha = 1 - dist / maxDist;
                        ctx.strokeStyle = `rgba(4, 67, 150, ${alpha * 0.15})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }

                // Connect to mouse
                const dx = mouse.x - node.x;
                const dy = mouse.y - node.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 200) {
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(mouse.x, mouse.y);
                    const alpha = 1 - dist / 200;
                    ctx.strokeStyle = `rgba(4, 67, 150, ${alpha * 0.3})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        // Event Listeners
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-auto"
        />
    );
}
