-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: agme
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (1,'2020-12-31 12:30:00.000000','2020-09-21 18:45:00.000000','TEST DESCRIPTION','Consultation'),(2,'2020-12-31 13:30:00.000000','2020-09-21 17:45:00.000000','TEST DESCRIPTION','Consultation'),(3,'2020-12-31 14:30:00.000000','2020-09-21 16:45:00.000000','TEST DESCRIPTION','Consultation'),(4,'2020-12-31 15:30:00.000000','2020-09-21 15:45:00.000000','TEST DESCRIPTION','Short Meeting'),(5,'2020-12-31 16:30:00.000000','2020-09-21 14:45:00.000000','TEST DESCRIPTION','Short Meeting'),(6,'2020-12-31 17:30:00.000000','2020-09-21 13:45:00.000000','TEST DESCRIPTION','Meeting'),(7,'2020-12-31 18:30:00.000000','2020-09-21 12:45:00.000000','TEST DESCRIPTION','Meeting'),(8,'2020-12-31 19:30:00.000000','2020-09-21 11:45:00.000000','TEST DESCRIPTION','Meeting'),(9,'2020-12-31 20:30:00.000000','2020-09-21 10:45:00.000000','TEST DESCRIPTION','Long Meeting'),(10,'2020-12-31 21:30:00.000000','2020-09-21 09:45:00.000000','TEST DESCRIPTION','Long Meeting');
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `appointment_type`
--

LOCK TABLES `appointment_type` WRITE;
/*!40000 ALTER TABLE `appointment_type` DISABLE KEYS */;
INSERT INTO `appointment_type` VALUES ('Consultation',30),('Long Meeting',60),('Meeting',30),('Short Meeting',15);
/*!40000 ALTER TABLE `appointment_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `availability`
--

LOCK TABLES `availability` WRITE;
/*!40000 ALTER TABLE `availability` DISABLE KEYS */;
INSERT INTO `availability` VALUES (1,_binary '\0',_binary '\0',_binary '\0',_binary '',_binary '',_binary '',_binary ''),(2,_binary '\0',_binary '',_binary '\0',_binary '',_binary '',_binary '',_binary '\0'),(3,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '',_binary '\0'),(4,_binary '',_binary '',_binary '',_binary '',_binary '',_binary '\0',_binary '\0'),(5,_binary '\0',_binary '\0',_binary '\0',_binary '\0',_binary '\0',_binary '\0',_binary ''),(6,_binary '\0',_binary '',_binary '',_binary '\0',_binary '',_binary '',_binary '\0'),(7,_binary '\0',_binary '',_binary '\0',_binary '\0',_binary '',_binary '\0',_binary '\0'),(8,_binary '',_binary '',_binary '\0',_binary '\0',_binary '',_binary '',_binary '\0'),(9,_binary '\0',_binary '',_binary '\0',_binary '',_binary '',_binary '\0',_binary '\0'),(10,_binary '',_binary '',_binary '\0',_binary '\0',_binary '\0',_binary '\0',_binary '');
/*!40000 ALTER TABLE `availability` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,1,'Aliesofely',6),(2,2,'Diferathe',7),(3,3,'Prinkin',8),(4,4,'Ressoare',8),(5,5,'Aliesofely',1),(6,6,'Aliesofely',5),(7,7,'Prinkin',6),(8,8,'xx_Sors1951',3),(9,9,'Whined22',2),(10,10,'Mady2000',5);
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `business`
--

LOCK TABLES `business` WRITE;
/*!40000 ALTER TABLE `business` DISABLE KEYS */;
INSERT INTO `business` VALUES (1,'Webizy','Mady2000'),(2,'Wash.ly','Whined22'),(3,'Fanatix','Aliesofely');
/*!40000 ALTER TABLE `business` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Worker'),(2,'Customer'),(3,'Admin');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('Aliesofely',_binary '','$2a$10$JiOCJ2fhItfpqCVU9N0ozuWLijqoPt.OBPIvYn/3Z7o9p7mg5Ocri',3,3),('Behinscathe',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',2,16),('Diferathe',_binary '','$2a$10$JiOCJ2fhItfpqCVU9N0ozuWLijqoPt.OBPIvYn/3Z7o9p7mg5Ocri',1,6),('Drecoughter',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',1,8),('Fough1996',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',2,19),('Harstand',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',2,15),('Hatioul',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',1,13),('Henin1991',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',1,9),('Hincycle',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',2,18),('Immalf',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',2,17),('Mady2000',_binary '','$2a$10$JiOCJ2fhItfpqCVU9N0ozuWLijqoPt.OBPIvYn/3Z7o9p7mg5Ocri',3,1),('Nothery',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',2,20),('Onday1937',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',2,14),('Prinkin',_binary '','$2a$10$JiOCJ2fhItfpqCVU9N0ozuWLijqoPt.OBPIvYn/3Z7o9p7mg5Ocri',1,5),('Ressoare',_binary '','$2a$10$JiOCJ2fhItfpqCVU9N0ozuWLijqoPt.OBPIvYn/3Z7o9p7mg5Ocri',1,4),('Sicticived',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',1,12),('Wastione',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',1,10),('Whimed',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',1,11),('Whined22',_binary '','$2a$10$JiOCJ2fhItfpqCVU9N0ozuWLijqoPt.OBPIvYn/3Z7o9p7mg5Ocri',3,2),('xx_Sors1951',_binary '','$2a$10$JiOCJ2fhItfpqCVU9N0ozuWLijqoPt.OBPIvYn/3Z7o9p7mg5Ocri',1,7);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` VALUES (1,'26 Ridge Road, EUREKA, QLD, 4660','DominicChave@gmail.com','Dominic','Chave','(07) 3667 5311'),(2,'38 Roseda-Tinamba Road, HIAWATHA, VIC, 3971','MasonRischbieth@gmail.com','Mason','Rischbieth','(03) 5363 7548'),(3,'81 Woerdens Road, TEA GARDENS, NSW, 2324','NathanFetherston@gmail.com','Nathan','Fetherston','(02) 4956 3094'),(4,'84 Reynolds Road, CALGOA, QLD, 4570','JaxonBirrell@gmail.com','Jaxon','Birrell','(07) 5389 5926'),(5,'24 Bass Street, COFFEE CAMP, NSW, 2480','SophiaWigg@hotmail.com','Sophia','Wigg','(02) 6768 3458'),(6,'20 Settlement Road, BUSHY PARK, VIC 3860','JohnCrick@yahoo.com','John','Crick','(03) 5332 7213'),(7,'6 Balonne Street, JOHNS RIVER, NSW, 2443','EllaGillbee@bigpond.com.au','Ella','Gillbee','(02) 6749 5043'),(8,'51 Railway Street, FOREST RIDGE, QLD, 4357','LucaHiggins@outlook.com','Luca','Higgins','(07) 4588 6533'),(9,'20 McLeans Road, COOMINGLAH, QLD, 4630','FinnTarrant@iCloud.com','Finn','Tarrant','(07) 3985 5927'),(10,'9 Prince Street, NYMBOIDA, NSW, 2460','JettSutton@gmail.com','Jett','Sutton','(02) 6770 8115'),(11,'20 Ross Street, ARUNDEL, QLD, 4214','AngelinaSingh@hotmail.com','Angelina','Singh','(07) 5652 2854'),(12,'74 Souttar Terrace, HAMERSLEY, WA, 6022','AliceBoxer@outlook.com','Alice','Boxer','(08) 9426 5232'),(13,'95 Aquatic Road, TINONEE, NSW, 2430','KateMacartney@gmail.com','Kate','Macartney','(02) 4948 8470'),(14,'54 Webb Road, STOCKTON, NSW, 2295','PoppyPerkin@iCloud.com','Poppy','Perkin','(02) 4979 4741'),(15,'40 Walters Street, GLENROWAN, VIC, 3675','MillaHixson@iCloud.com','Milla','Hixson','(03) 5391 9095'),(16,'87 Hebbard Street, BLACK ROCK NORTH, VIC, 3193','GemmaChifley@outlook.com','Gemma','Chifley','(03) 9998 1965'),(17,'16 Corny Court, KOONIBBA, SA, 5690','RoseLawley@gmail.com','Rose','Lawley','(08) 8797 9345'),(18,'6 Berambing Crescent, WILLMOT, NSW, 2770','JonathanMorison@gmail.com','Jonathan','Morison','(02) 4782 6041'),(19,'39 Myrtle Street, BUNGEET, VIC, 3726','AshleyYoung@iCloud.com','Ashley','Young','(03) 5311 5503'),(20,'3 Sinclair Street, MUNDOORA, SA, 5555','KobyWinter@gmail.com','Koby','Winter','(08) 8319 1446');
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `worker`
--

LOCK TABLES `worker` WRITE;
/*!40000 ALTER TABLE `worker` DISABLE KEYS */;
INSERT INTO `worker` VALUES (1,1,3,'Diferathe'),(2,2,2,'Hatioul'),(3,3,1,'Wastione'),(4,4,1,'xx_Sors1951'),(5,5,3,'Henin1991'),(6,6,3,'Drecoughter'),(7,7,3,'Sicticived'),(8,8,2,'Whimed'),(9,9,3,'Prinkin'),(10,10,1,'Ressoare');
/*!40000 ALTER TABLE `worker` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-27 15:00:57
