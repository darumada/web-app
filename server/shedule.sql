-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 17 2017 г., 09:29
-- Версия сервера: 5.6.37
-- Версия PHP: 5.5.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `app`
--

-- --------------------------------------------------------

--
-- Структура таблицы `shedule`
--

CREATE TABLE `shedule` (
  `id` int(11) NOT NULL,
  `group_college` varchar(255) NOT NULL,
  `day` enum('Понедельник','Вторник','Среда','Четверг','Пятница','Суббота') NOT NULL,
  `one` varchar(255) NOT NULL,
  `two` varchar(255) NOT NULL,
  `three` varchar(255) NOT NULL,
  `four` varchar(255) NOT NULL,
  `five` varchar(255) NOT NULL,
  `six` varchar(255) NOT NULL,
  `type` enum('Числитель','Знаменатель') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `shedule`
--

INSERT INTO `shedule` (`id`, `group_college`, `day`, `one`, `two`, `three`, `four`, `five`, `six`, `type`) VALUES
(1, '202 ИС', 'Пятница', 'Мультимедия', 'Алгоритмы', 'Математика', '', '', '', 'Числитель'),
(2, '202 ИС', 'Пятница', 'Мультимедия', 'Алгоритмы', 'Казахский', '', '', '', 'Знаменатель');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `shedule`
--
ALTER TABLE `shedule`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `shedule`
--
ALTER TABLE `shedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
