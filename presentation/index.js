// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Image,
  Notes,
  Appear,
  List,
  ListItem,
  CodePane
} from "spectacle";

import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";

import Interactive from "../assets/interactive";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/override.css");

const images = {
  kurtosys: require("../assets/Kurtosys.png"),
  son: require("../assets/sonof.png"),
  JSCT: require("../assets/JSCT.jpg"),
  callbackhell: require("../assets/callbackhell.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.JSCT.replace("/", "")} margin="0px auto 50px" height="200px" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JavaScript Concepts
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Cape Town JS - September 2017
          </Text>
          <Image src={images.kurtosys.replace("/", "")} margin="30px auto 50px" height="150px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">JavaScript is most kindly described as a language that "just happened" and an enduring testament to human capacity to route around problems</Heading>
          <Appear>
            <Text margin="50px 0 0" textColor="tertiary" caps bold>
              Properties
          </Text>
          </Appear>
          <List>
            <Appear>
              <ListItem>High-Level</ListItem>
            </Appear>
            <Appear>
              <ListItem>Dynamic</ListItem>
            </Appear>
            <Appear>
              <ListItem>Weakly Typed</ListItem>
            </Appear>
            <Appear>
              <ListItem>Object-Based</ListItem>
            </Appear>
            <Appear>
              <ListItem>Interpreted</ListItem>
            </Appear>
          </List>
          <Notes>
            <ul>
              <li>HL -> Abstraction.</li>
              <li>Dynamic -> Runtime not compiled.</li>
            </ul>
            It's an outlier in so much as it's a high level interpreted language that is often the targer of other compiled languages.  Newer version of the JS standard often be transpiled into a more common varient of JS.
Different dialects like TypeScript that add addition features like strong typing or entirely different languages that have a completly different paradigm such as Elm or ClosureScript (LISP) can target it.
It's the bytecode in the JVM sense or machine code in the native sense.
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">Sync / Async?</Heading>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/interactive.example")}
          ranges={[
              { loc: [0, 19], title: "Some code" },
              { loc: [12, 18], title: "React Render()" },
              { loc: [1, 3] },
              { loc: [4, 5] },
              { loc: [4, 6] },
              { loc: [4, 7] },
              { loc: [7, 10] }
          ]}
        />

        <Slide>
          <Interactive />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">WTF is a Promise?</Heading>
          <Appear>
            <Text size={6} textColor="secondary"> Something you asked for, happening at some point</Text>
          </Appear>
          <Appear>
            <Heading size={5} textColor="secondary">State a promise can exist in?</Heading>
          </Appear>
          <List>
            <Appear>
              <ListItem>Resolved</ListItem>
            </Appear>
            <Appear>
              <ListItem>Broken</ListItem>
            </Appear>
            <Appear>
              <ListItem>Waiting... (Nothing yet)</ListItem>
            </Appear>
          </List>
          <Notes>
            <ul>
              <li>Future in Java, Task in C#</li>
              <li>In the same way a promise in JS is a data structure that implements being resolved, being broken or still waiting on one.</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">Why are promises useful?</Heading>
          <CodePane textSize={20}
            lang="js"
            source={require("raw-loader!../assets/callbackhell.example")}
            margin="20px auto"
          />
        </Slide>

         <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={6} textColor="primary">CALLBACK HELL</Heading>
          <Image src={images.callbackhell.replace("/", "")} margin="0px auto 50px" height="500px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>

      </Deck>
    );
  }
}
