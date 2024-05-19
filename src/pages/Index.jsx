import { Container, Box, Text, VStack, HStack, Link, IconButton, List, ListItem, ListIcon, Heading, Divider } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} align="start">
        <Box>
          <Heading as="h1" size="xl">
            Badepalli Ramcharan Reddy
          </Heading>
          <Text fontSize="lg">Python Developer</Text>
        </Box>

        <HStack spacing={4}>
          <HStack>
            <FaPhone />
            <Text>+91 6385655711</Text>
          </HStack>
          <HStack>
            <FaEnvelope />
            <Text>mr.ramcharanreddy@gmail.com</Text>
          </HStack>
          <Link href="https://www.linkedin.com/in/your-linkedin" isExternal>
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} />
          </Link>
          <Link href="https://github.com/your-github" isExternal>
            <IconButton aria-label="GitHub" icon={<FaGithub />} />
          </Link>
          <Link href="https://leetcode.com/your-leetcode" isExternal>
            <IconButton aria-label="LeetCode" icon={<FaCode />} />
          </Link>
        </HStack>

        <Box>
          <Heading as="h2" size="lg">
            Summary
          </Heading>
          <Text>Passionate computer science graduate seeking an entry-level position to apply technical skills and contribute to the success of an organization. Dedicated to continuous learning and personal growth, with a proven ability to work in challenging environments and collaborate effectively with cross-functional teams.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            Experience
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Text fontWeight="bold">JMAN GROUP</Text>
              <Text>Chennai // Software Engineer Internship // 04/2022 – 07/2022</Text>
              <List spacing={1} pl={4}>
                <ListItem>Worked on an NLP project for sentiment analysis on social media data.</ListItem>
                <ListItem>Developed a deep learning model using TensorFlow for sentiment analysis.</ListItem>
                <ListItem>Achieved an accuracy of 75% in sentiment analysis.</ListItem>
              </List>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">ILANDER TECHNOLOGIES</Text>
              <Text>Rayachoty // Software Engineer Internship // 09/2022 - Present</Text>
              <List spacing={1} pl={4}>
                <ListItem>In-depth knowledge of Ilander for Python & Django development: Leverage Ilander's features and functionalities to streamline development.</ListItem>
                <ListItem>Proven experience deploying & managing Django applications: Successfully deployed and managed Django applications on Ilander's infrastructure.</ListItem>
                <ListItem>Highly familiar with Ilander's tools & workflows: Utilize Ilander's tools and workflows to achieve efficient development.</ListItem>
              </List>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            Education
          </Heading>
          <Text>KALASALINGAM ACADEMY OF RESEARCH AND EDUCATION</Text>
          <Text>Bachelor of Science in Computer Science // 2018 – 2022</Text>
          <Text>CGP: 7.21</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            Projects
          </Heading>
          <List spacing={3}>
            <ListItem>
              <Text fontWeight="bold">Yelp Clone (React, PostgreSQL)</Text>
              <Link href="https://github.com/your-yelp-clone" isExternal>
                GitHub link
              </Link>
              <List spacing={1} pl={4}>
                <ListItem>Simplified Yelp web app, including web page, database & server to process data.</ListItem>
                <ListItem>Developed a dynamic webpage to view and modify data using ReactJS.</ListItem>
                <ListItem>Wrote code to parse highly nested JSON data to take 50,000 yelp businesses, reviews, and users and insert them into the PSQL database.</ListItem>
              </List>
            </ListItem>
            <ListItem>
              <Text fontWeight="bold">Sentiment Analysis | CS779A NLP Challenge</Text>
              <Link href="https://github.com/your-sentiment-analysis" isExternal>
                GitHub link
              </Link>
              <List spacing={1} pl={4}>
                <ListItem>Objective: Develop a neural model to classify text into neutral, positive, or negative sentiments using corpus of 92k sentences.</ListItem>
                <ListItem>Pre-processed data by removing noise, such as URLs, phone numbers, time, numbers, currency, emails, tags, and stop words; replaced diacritics, expanded contractions, split combined words in hashtags, and translated text emojis.</ListItem>
                <ListItem>Tokenized text using the SpaCy tokenizer and built vocabulary using pre-built Fast Text English word vector embeddings.</ListItem>
                <ListItem>Implemented various models, achieving best results with LSTM (F1 score of 0.884), followed by GRU, CNN, MLP, and RNN.</ListItem>
              </List>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            Technologies and Languages
          </Heading>
          <List spacing={1}>
            <ListItem>Programming Languages: Python, JavaScript</ListItem>
            <ListItem>Web Development: Django, Flask, HTML, CSS, Bootstrap</ListItem>
            <ListItem>Database Management: SQL, MySQL, PostgreSQL</ListItem>
            <ListItem>Version Control: Git, GitHub</ListItem>
            <ListItem>RESTful APIs</ListItem>
            <ListItem>Object-Oriented Programming (OOP) principles</ListItem>
            <ListItem>Data Structures and Algorithms</ListItem>
            <ListItem>Docker, Linux</ListItem>
            <ListItem>AWS</ListItem>
            <ListItem>Problem-solving and debugging skills</ListItem>
          </List>
        </Box>

        <Box>
          <Heading as="h2" size="lg">
            Certification
          </Heading>
          <Text>SAP Certified Development Associate- ABAP with SAP NetWeaver 7.40</Text>
          <Text>Issued Dec 2021</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
