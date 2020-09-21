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
INSERT INTO `appointment` VALUES (1,'2020-12-31 12:30:00.000000','2020-09-21 18:45:00.000000','TEST DESCRIPTION','DUMMY'),(2,'2020-12-31 13:30:00.000000','2020-09-21 17:45:00.000000','TEST DESCRIPTION','DUMMY'),(3,'2020-12-31 14:30:00.000000','2020-09-21 16:45:00.000000','TEST DESCRIPTION','DUMMY'),(4,'2020-12-31 15:30:00.000000','2020-09-21 15:45:00.000000','TEST DESCRIPTION','DUMMY'),(5,'2020-12-31 16:30:00.000000','2020-09-21 14:45:00.000000','TEST DESCRIPTION','DUMMY'),(6,'2020-12-31 17:30:00.000000','2020-09-21 13:45:00.000000','TEST DESCRIPTION','DUMMY'),(7,'2020-12-31 18:30:00.000000','2020-09-21 12:45:00.000000','TEST DESCRIPTION','DUMMY'),(8,'2020-12-31 19:30:00.000000','2020-09-21 11:45:00.000000','TEST DESCRIPTION','DUMMY'),(9,'2020-12-31 20:30:00.000000','2020-09-21 10:45:00.000000','TEST DESCRIPTION','DUMMY'),(10,'2020-12-31 21:30:00.000000','2020-09-21 09:45:00.000000','TEST DESCRIPTION','DUMMY');
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
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
INSERT INTO `booking` VALUES (1,1,'Aliesofely',6),(2,2,'Diferathe',7),(3,3,'Prinkin',8),(4,4,'Ressoare',8),(5,5,'Aliesofely',10),(6,6,'Aliesofely',14),(7,7,'Prinkin',6),(8,8,'xx_Sors1951',12),(9,9,'Whined22',11),(10,10,'Mady2000',9);
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
INSERT INTO `role` VALUES (1,'Executive Chief'),(2,'Salesperson'),(3,'Project Manager'),(4,'Scrum Master'),(5,'Accountant');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('Aliesofely','JakeLemmon@gmail.com',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',3),('Diferathe','JesseBowmaker@yahoo.com',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',5),('Mady2000','DominicChave@gmail.com',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',1),('Prinkin','OscarSoares@hotmail.com',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',4),('Ressoare','DanielErvin@gmail.com',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',2),('Whined22','MasonRischbieth@gmail.com',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',1),('xx_Sors1951','DeclanWhitta@bigpond.com.au',_binary '','$2a$10$t7nHhkFHZMSRYnka4Ez0KeeAugbi.92xG0BSuLq5QTRr8MLmUhmNq',2);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `worker`
--

LOCK TABLES `worker` WRITE;
/*!40000 ALTER TABLE `worker` DISABLE KEYS */;
INSERT INTO `worker` VALUES (6,'John','Crick',1,3),(7,'Nathan','Fetherston',2,2),(8,'Jett','Sutton',3,1),(9,'Ella','Gillbee',4,1),(10,'Emma','Vosper',5,3),(11,'Luca','Higgins',6,3),(12,'Alice','Boxer',7,3),(13,'Angelina','Singh',8,2),(14,'Sophia','Wigg',9,3),(15,'Jaxon','Birrell',10,1);
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

-- Dump completed on 2020-09-21 20:05:29
