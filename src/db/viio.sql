-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-11-2023 a las 03:24:01
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `viio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `phone` varchar(10) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `state` int(11) NOT NULL,
  `creation_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `password`, `state`, `creation_date`) VALUES
(1, 'Jorge Velasquez', '3002497019', 'jorge@gmail.com', '$2a$12$wIoadFkxP5AqppzoWLuHku4h6r0NDnPLsmSYjDYbINrgp200KcngW', 1, '0000-00-00 00:00:00'),
(3, 'Jorge Velasquez Sierra', '3002313121', 'velasquezsierrajorge@gmail.com', '$2a$12$zQ/8IWBoZVTqm6gH2/5l5utFxcMqvsD52QqJJscFKyuSaXgGdG65.', 1, '0000-00-00 00:00:00'),
(4, 'Jorge Velasquez Sierra', '3002313121', 'desarrollo@periferia-it.com', '$2a$12$KF0Ya7tlI/Gzp9Q.jWcikevwwPuHlbtr63rNEuNyQuSkAtV47sGmK', 1, '0000-00-00 00:00:00'),
(5, 'Jorge Velasquez Sierra', '3002313121', 'jorgealfredovelasquezsierra@gmail.com', '$2a$12$3ygDemhJ3tl5s/UZTtQQ7OWOhJd.8Q90WQu0R/iD3vgqO4zrgZKOC', 1, '0000-00-00 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
