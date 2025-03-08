import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styles from './../module/Cube.module.css';

const Cube = () => {
    const mountRef = useRef(null); // Ref do kontenera, w którym renderujemy scenę Three.js

    useEffect(() => {
        if (!mountRef.current) return; // Sprawdzamy, czy kontener istnieje

        // Inicjalizacja sceny Three.js
        const scene = new THREE.Scene();
        const aspectRatio = 1; // Zachowanie proporcji 1:1 (sześcian ma formę kwadratu)
        const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

        const renderer = new THREE.WebGLRenderer({ antialias: true });

        // Ustawienie tła renderera na przezroczyste
        renderer.setClearColor(0x000000, 0);  // Transparent background
        renderer.setSize(400, 400); // Dopasowanie rozmiaru renderera do rozmiarów sześcianu (np. 2x2 jednostki)

        const mountNode = mountRef.current; // Zapisywanie referencji do zmiennej lokalnej

        mountNode.appendChild(renderer.domElement);

        // Tworzenie sześcianu
        const geometry = new THREE.BoxGeometry(3, 3, 3); // Geometria sześcianu o rozmiarze 2x2x2
        const material = new THREE.MeshPhongMaterial({ color: 0x4ff0b7, wireframe: true }); // Kolor sześcianu
        const cube = new THREE.Mesh(geometry, material); // Utworzenie sześcianu
        scene.add(cube);

        // Dodanie świateł
        const light = new THREE.AmbientLight(0x404040); // Miękkie światło ogólne
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5); // Światło kierunkowe
        directionalLight.position.set(2, 2, 2);
        scene.add(light);
        scene.add(directionalLight);

        // Ustawienie kamery
        camera.position.z = 5; // Kamera jest wystarczająco daleko, aby pomieścić sześcian

        // Funkcja animacji
        const animate = () => {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01; // Obrót sześcianu wokół osi X
            cube.rotation.y += 0.01; // Obrót sześcianu wokół osi Y
            renderer.render(scene, camera); // Renderowanie sceny
        };

        animate();

        // Czyszczenie zasobów po unmount
        return () => {
            if (mountNode) {  // Używamy lokalnej zmiennej
                mountNode.removeChild(renderer.domElement);
            }
        };
    }, []); // Efekt jest uruchamiany tylko raz, przy montowaniu komponentu

    return (
        <div className={styles.threeContainer} ref={mountRef}></div>
    );
};

export default Cube;