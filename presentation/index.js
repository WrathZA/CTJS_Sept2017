// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Slide,
  Text,
  Image,
  Notes,
  Appear,
  List,
  ListItem,
  CodePane,
  S
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
  JSCT: require("../assets/JS__meetup-logo.png"),
  callbackhell: require("../assets/callbackhell.jpg"),
  refval: require("../assets/refval.gif"),
  refvaltype: require("../assets/refvaltype.gif"),
  prototypes: require("../assets/prototypes.png"),
  queue: require("../assets/queue.jpg"),
  hipster: require("../assets/hipster.jpg"),
  thanks: require("../assets/thanks.gif"),
  devconf: require("../assets/devconf.png"),
  eventloop: require("../assets/EventLoopRepeat.gif"),
  loopcat: require("../assets/loop-cat.gif"),
  eventloopstatic: require("../assets/eventloopstatic.png"),
  mutation: require("../assets/mutation.jpg")
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
      <Deck controls= {false} transition={["zoom", "slide"]} transitionDuration={500} theme={theme} contentWidth={1800} contentHeight={1000} progress="none">

        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.JSCT.replace("/", "")} margin="0px auto 50px" height="500px" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            JavaScript Concepts
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Cape Town JS - September 2017
          </Text>
        </Slide>

         <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fill caps lineHeight={1} textColor="secondary">
            HELLO!
          </Heading>
          <Image margin="50px auto" src={images.son.replace("/", "")} margin="0px auto 50px" height="700px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary">JavaScript is most kindly described as a language that "just happened" and an enduring testament to human capacity to route around problems</Heading>
          <Appear>
          <Text textSize={86} margin="50px 0 0" textColor="tertiary" caps bold>
              Properties
          </Text>
          </Appear>
          <List margin="30px 0 0 600px">
            <Appear>
              <ListItem textSize={56}>High-Level</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={56}>Dynamic</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={56}>Weakly/Loosely Typed</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={56}>Object-Based</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={56}>Interpreted</ListItem>
            </Appear>
             <Appear>
              <ListItem textSize={56}>*THE* transpile target </ListItem>
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
          <Text textSize="65" margin="50px 0 0" textColor="tertiary" bold>
              JS? JScript? ECMAScript?
          </Text>
          <Text textSize="65" margin="50px 0 0" textColor="tertiary" bold>
              ES5? ES6? ES7/ES2016? ES.Next?
          </Text>
          <Appear>
            <Text textSize="75" margin="50px 0 0" textColor="secondary" bold>
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

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>JavaScript Types</Heading>
          <Text textSize="66" textColor="primary" bold>
            <dl>
              <dt>Boolean</dt>
              <dt>Number</dt>
              <dt>String</dt>
              <dt>Null</dt>
              <dt>Undefined</dt>
              <dt>---</dt>
              <dt>Object {"{"} {"}"}</dt>
            </dl>
          </Text>
          <Appear>
            <Text textSize="80" margin="50px 0 0" textColor="tertiary" bold>
              Arrays are objects
            </Text>
          </Appear>
          <Appear>
            <Text textSize="100" margin="50px 0 0" textColor="tertiary" bold>
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
          <Heading size={3} textColor="primary">What's an Object? {"{"} {"}"}</Heading>
          <Text margin="25px 0 0" textColor="tertiary" bold>
            JavaScript objects are dynamic bags of properties
            </Text>
          <CodePane textSize={32}
            lang="js"
            source={require("raw-loader!../assets/object.example")}
            margin="20px"
          />
          <Notes>
            Where each property is one of the types in the previous slide.
            </Notes>
        </Slide>

        <Slide>
          <Heading size={4} textColor="secondary" fit caps>Value & Reference Types</Heading>
           <Text margin="10px 0 0" textColor="tertiary" size={1} fill>
            <Image src={images.refval.replace("/", "")} margin="30px auto 50px" height="800px" />
          </Text>
        </Slide>

         <Slide >
          <Heading size={2} textColor="secondary" caps>Duck Typing At Runtime</Heading>
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

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">FUNCTIONS() ARE FIRST CLASS CITIZENS</Heading>
          <Text margin="50px" textColor="tertiary" caps textSize={66}>This bares reiterating</Text>
          <Text textSize={66} textColor="tertiary" margin="50px auto">They're objects which means they can be passed as arguments and variables</Text>
          <Text textSize={66} textColor="tertiary"> They can be returned from other functions</Text>
          <Appear>
            <Text textSize="100" margin="50px 0 0" textColor="primary" bold>
              MATTERS WHY?
            </Text>
          </Appear>
          <Notes>
            <ul>
              <li>Why is out of scope for this talk.</li>
              <li>Partialliy implemented. currying etc</li>
              <li>function factories?</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Objects & Prototypes</Heading>
          <Image src={images.prototypes.replace("/", "")} margin="30px auto 50px" height="800px" />
          <Notes>
            <ul>
              <li>Confusing for OOP people.</li>
              <li>No class implementation (the class keyword in ES2015, but is syntactical sugar</li>
              <li>Objects are bags of properties but all link to a prototype seach </li>
            </ul>
          </Notes>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>1. Prototypes & new Object()</Heading>
          <CodePane textSize={34}
            lang="js"
            source={require("raw-loader!../assets/proto.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>2. Prototypes & new Object()</Heading>
          <CodePane textSize={34}
            lang="js"
            source={require("raw-loader!../assets/proto1.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary" caps>3. Prototypes & new Object()</Heading>
          <CodePane textSize={34}
            lang="js"
            source={require("raw-loader!../assets/proto2.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide >
          <Heading size={2} textColor="secondary" caps>Polyfills! ∴ Prototypes!</Heading>
          <Text size={6} textColor="secondary"> Remember "dynamic" from the first slide?</Text>
          <Text size={6} textColor="secondary"> We can extend the langauge at runtime by adding to existing prototypes</Text>
          <CodePane textSize={36}
            lang="js"
            source={require("raw-loader!../assets/poly.example")}
            margin="20px auto"
          />
        </Slide>

         <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
           <Heading size={2} textColor="primary" caps>THE EVENT LOOP</Heading>
           <Image margin="50px" src={images.loopcat.replace("/", "")} height="450px" />
         </Slide>

         <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
           <Image src={images.eventloopstatic.replace("/", "")} height="900px" />
         </Slide>

         <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
           <Image src={images.eventloop.replace("/", "")} height="900px" />
         </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary" caps>WTF is a Promise?</Heading>
          <Appear>
            <Text textSize={56} textColor="secondary"> Something you asked for, happening at some point</Text>
          </Appear>
          <Appear>
            <Heading margin="50px 0 0 0" size={5} textColor="secondary">State a promise can exist in?</Heading>
          </Appear>
          <List margin="20px 0 0 450px">
            <Appear>
              <ListItem textSize={56}>Resolved</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={56}>Broken</ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={56}>Waiting... (Nothing yet)</ListItem>
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
          <Heading size={1} textColor="primary" caps>thenable?</Heading>
          <Text textSize={62} margin="10px 0 0" textColor="tertiary" bold> Object/Function with a then() function.</Text>
          <CodePane textSize={42}
            lang="js"
            source={require("raw-loader!../assets/then.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary" caps>Before Promises</Heading>
          <CodePane textSize={36}
            lang="js"
            source={require("raw-loader!../assets/callbackhell.example")}
            margin="20px auto"
          />
        </Slide>

         <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">CALLBACK HELL</Heading>
          <Image src={images.callbackhell.replace("/", "")} margin="0px auto 50px" height="800px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">THERE IS NOTHING WRONG WITH USING CALLBACKS</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={3} textColor="primary">Why are promises useful?</Heading>
          <CodePane textSize={46}
            lang="js"
            source={require("raw-loader!../assets/promise.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="secondary">SYNC / ASYNC?</Heading>
          <Image margin="50px auto" src={images.queue.replace("/", "")} height="600px" />
          <Notes>
            <ul>
              <li>Movie ticket analogy... physical queue requires request to complete before starting next one.</li>
            </ul>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Interactive />
        </Slide>

        <CodeSlide
          textSize={46}
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/interactive.example")}
          ranges={[
              { loc: [0, 19], title: "A flashy code slide!" },
              { loc: [12, 18], title: "React Render()" },
              { loc: [1, 3] },
              { loc: [4, 5] },
              { loc: [4, 6] },
              { loc: [4, 7] },
              { loc: [7, 10] },
              { loc: [15, 16] }
          ]}
        />

        <Slide transition={["fade flip"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="primary">MAP?</Heading>
          <Heading size={1} textColor="primary">REDUCE?</Heading>
          <Heading size={1} textColor="primary">FILTER?</Heading>
        </Slide>

         <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="secondary">FUNCTIONAL?!?!</Heading>
          <Image margin="50px auto" src={images.hipster.replace("/", "")} height="700px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>REDUCE</Heading>
          <CodePane textSize={44}
            lang="js"
            source={require("raw-loader!../assets/reduce1.example")}
            margin="20px auto"
          />
        </Slide>

         <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>REDUCE</Heading>
          <CodePane textSize={44}
            lang="js"
            source={require("raw-loader!../assets/reduce2.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps> <S type="strikethrough">REDUCE</S> FILTER</Heading>
          <CodePane textSize={42}
            lang="js"
            source={require("raw-loader!../assets/reduce2.1.example")}
            margin="20px auto"
          />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>FILTER</Heading>
          <CodePane textSize={44}
            lang="js"
            source={require("raw-loader!../assets/filter1.example")}
            margin="20px auto"
          />
        </Slide>

         <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>MAP</Heading>
          <CodePane textSize={44}
            lang="js"
            source={require("raw-loader!../assets/map1.example")}
            margin="20px auto"
          />
        </Slide>

         <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
           <Heading size={2} textColor="primary" caps>mutation</Heading>
           <Image margin="50px" src={images.mutation.replace("/", "")} height="750px" />
           <Notes>
             <ul>
               <li>Immutablity allows multiple simultaneous reads</li>
               <li>Clusters can access and work in parallel</li>
               <li>nosql, hadoop, time-series data etc</li>
             </ul>
           </Notes>
         </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary" caps>CHAINING</Heading>
          <CodePane textSize={44}
            lang="js"
            source={require("raw-loader!../assets/chaining.example")}
            margin="20px auto"
          />
        </Slide>

         <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <Image src={images.thanks.replace("/", "")} margin="0px auto 50px" height="800px" />
        </Slide>

         <Slide transition={["zoom"]} bgColor="secondary" textColor="primary">
          <Image src={images.devconf.replace("/", "")} margin="0px auto 50px" height="600px" />
          <Heading size={2} textColor="primary"> Call for Speakers Open!</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Text textColor="primary">
               https://leanpub.com/javascriptallongesix/
               http://eloquentjavascript.net
               http://speakingjs.com
               https://developer.mozilla.org/en-US/docs/Web/JavaScript
               https://devdocs.io/
          </Text>
        </Slide>

      </Deck>
    );
  }
}
