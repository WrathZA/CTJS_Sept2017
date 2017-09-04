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
  callbackhell: require("../assets/callbackhell.jpg"),
  refval: require("../assets/refval.gif"),
  refvaltype: require("../assets/refvaltype.gif"),
  prototypes: require("../assets/prototypes.png"),
  queue: require("../assets/queue.jpg")
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
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} contentWidth={1800} contentHeight={1000}>

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
          <List margin="0 0 0 250px">
            <Appear>
              <ListItem>High-Level</ListItem>
            </Appear>
            <Appear>
              <ListItem>Dynamic</ListItem>
            </Appear>
            <Appear>
              <ListItem>Weakly/Loosely Typed</ListItem>
            </Appear>
            <Appear>
              <ListItem>Object-Based</ListItem>
            </Appear>
            <Appear>
              <ListItem>Interpreted</ListItem>
            </Appear>
             <Appear>
              <ListItem>*THE* transpile target </ListItem>
            </Appear>
          </List>
          <Notes>
            <ul>
              <li>HL -> Abstraction.</li>
              <li>Dynamic -> Do what static langauges do at compile time at Runtime</li>
              <li>Dynamic -> language can be extended at runtimee</li>
              <li>Weakly Typed -> </li>
            </ul>
            <span>
              It's an outlier in so much as it's a high level interpreted language that is often the targer of other compiled languages.  Newer version of the JS standard often be transpiled into a more common varient of JS.
Different dialects like TypeScript that add addition features like strong typing or entirely different languages that have a completly different paradigm such as Elm or ClosureScript (LISP) can target it.
Its the bytecode in the JVM sense or machine code in the native sense.</span>
          </Notes>
        </Slide>

        <Slide >
          <Heading size={1} textColor="secondary">NAMES?</Heading>
          <Text textSize="52" margin="50px 0 0" textColor="tertiary" bold>
              JS? JScript? ECMAScript?
          </Text>
          <Text textSize="52" margin="50px 0 0" textColor="tertiary" bold>
              ES5? ES6? ES7/ES2016? ES.Next?
          </Text>
          <Appear>
            <Text margin="50px 0 0" textColor="secondary" bold>
              Netscape saved us all.
            </Text>
          </Appear>
          <Notes>
            <ul>
              <li>Browser Wars! MS was an alpha predator and literally evil.</li>
              <li>Netscape Navigator 2.0 was released, featuring support for JavaScript.</li>
              <li>Microsoft developed a compatible dialect of the language, naming it JScript</li>
              <li>Netscape saved US via the European Computer Manufacturers Association (ECMA)</li>
            </ul>
          </Notes>
        </Slide>

         <Slide >
          <Heading size={2} textColor="secondary">JavaScript Types</Heading>
          <Text textSize="46" bold>
            <dl>
              <dt>Boolean</dt>
              <dt>Number</dt>
              <dt>String</dt>
              <dt>Null</dt>
              <dt>Undefined (*3 different types)</dt>
              <dt>---</dt>
              <dt>Object</dt>
            </dl>
          </Text>
          <Appear>
            <Text textSize="52" margin="50px 0 0" textColor="tertiary" bold>
              Arrays are objects
            </Text>
          </Appear>
          <Appear>
            <Text textSize="52"  margin="50px 0 0" textColor="tertiary" bold>
              *FUNCTIONS() are OBJECTS*
            </Text>
          </Appear>
          <Notes>
            <ul>
              <li>Intentionally ignore Symbols</li>
              <li>Everything Immutable except Object</li>
              <li>Functions are first-class objects, because they can have properties and methods just like any other object.</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">What's an Object?</Heading>
           <Appear>
              <Text margin="50px 0 0" textColor="tertiary" bold>
                JavaScript objects are dynamic bags of properties
              </Text>
            </Appear>
            <Notes>
              Where each property is one of the types in the previous slide.
            </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">Objects & Prototypes</Heading>
          <Image src={images.prototypes.replace("/", "")} margin="30px auto 50px" height="650px" />
          <Notes>
            <ul>
              <li>Confusing for OOP people.</li>
              <li>No class implementation (the class keyword in ES2015, but is syntactical sugar</li>
              <li>Objects are bags of properties but all link to a prototype seach </li>
            </ul>
          </Notes>
        </Slide>

        <Slide >
          <Heading size={2} textColor="secondary" caps>Polyfills!</Heading>
          <Text size={6} textColor="secondary"> Remember "dynamic" from the first slide?</Text>
          <Text size={6} textColor="secondary"> We can extend the langauge at runtime by adding to existing prototypes</Text>
          <CodePane textSize={36}
            lang="js"
            source={require("raw-loader!../assets/poly.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide maxWidth={1500} >
          <Heading size={4} textColor="secondary" fit>Value & Reference Types</Heading>
           <Text margin="10px 0 0" textColor="tertiary" size={1} fill>
            <Image src={images.refval.replace("/", "")} margin="30px auto 50px" height="800px" />
          </Text>
        </Slide>

         <Slide >
          <Heading size={2} textColor="secondary">Duck Typing At Runtime</Heading>
           <Text margin="10px 0 0" textColor="tertiary" size={1} fill>
            <Image src={images.refvaltype.replace("/", "")} height="650px" />
          </Text>
          <Notes>
            <ul>
              <li>Remember "weakly/loosely typed</li>
              <li> “type casting,” when done explicitly, and “coercion” when done implicitly</li>
            </ul>
          </Notes>
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

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary">Sync / Async?</Heading>
           <Image src={images.queue.replace("/", "")} height="400px" />
           <Notes>
            <ul>
              <li>Movie ticket analogy... physical queue requires request to complete before starting next one.</li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Interactive />
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
              { loc: [7, 10] },
              { loc: [15, 16] }
          ]}
        />

         <Slide >
          <Heading size={2} textColor="secondary" caps>REDUCE</Heading>
          <CodePane textSize={36}
            lang="js"
            source={require("raw-loader!../assets/reduce1.example")}
            margin="20px auto"
          />
        </Slide>


      </Deck>
    );
  }
}
