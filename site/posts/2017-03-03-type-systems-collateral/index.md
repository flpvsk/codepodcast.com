---
title: "Overview of type systems discussed in episode 5"
date: 2017-03-03
---

We've recently released [the episode about type systems](http://codepodcast.com/s0e5.html). To give you more context, I've refactored the script of the episode and added examples.

## Hardworking Carpenters

Type System is like Ikea furniture. It ensures that parts that don't belong together won't fit. For a person who assembles the furniture, mistakes are harder to make. Still possible, just hard. On the other hand, we can always go to a building materials store. Buy wood and nails. And build furniture on our own. This what writing Clojure or JavaScript feels like. We'll not talk about it today.

Here's the definition from "Types and Programming Languages" by Benjamin Pierce.

> A type system is a tractable syntactic method for proving the absence of
certain program behaviors by classifying phrases according to the kinds of values they compute.

It's impossible to prove that a program has no mistakes. Types make sure that certain kinds of errors will never happen. We, programmers, assign types to expressions, so the type system knows what kind of values are "legal" and what is expected.

## Types, what's in store?

Modern type systems can do things. Cool things.


1. Simple checks. TS will tell you if you're passing an integer to a function that excepts a string.

2. Type system gives us ways to write abstract code. It reduces code duplication and makes the code easier to read.

3. It's a documentation tool. Type information is used by people and static analysis tools. Autocomplete in an IDE is one example.

4. Compilers can use type information to make the program more efficient.

5. Type systems can ensure language safety. That's a tricky one. Let me quote Pierce again. He's talking about a safe language:

>  A programmer using this language then expects that an array can be changed only by using the update operation on it explicitly — and not, for example by writing past the end of some data structure.

## Y'all Fancy

It's hard to classify Type Systems. We'll be talking more about type system features rather than concrete languages.

We'll sometimes use the expression "fancy type system" to refer to those that focus on powerful abstractions rather than simple checks. Type systems that are used in languages like Haskell, OCaml, F# and so on.

## Check it out

JavaScript doesn't have a static type system. It's a design choice. The users that miss perks of types came up with TypeScript. They introduced extra syntax to declare types and wrote a type checker and a compiler to javascript.

TypeScript is a good example of a language that's focusing on *checks* and *documentation*. TypeScript compiler doesn't do any type-based optimizations, to keep the JS output predictable.

```javascript
/**
 * In pure JS we'd write types in the comments.
 *
 * @param {String} name
 * @param {Image} palm
 * @return {Faith}
 */
function tellFortune(name, palm) { ... }

/**
 * In TypeScript, types will be enforced.
 * Also, tools can use the type information.
 */
function tellFortune(
  name: String,
  palm: Image
) : Faith { ... }
```


## Keep it Classy

Type Systems in TypeScript, Java and C# give us two main tools to create abstractions: classes and interfaces.

Classes describe both a public signature of the object and the implementation. Interfaces only describe the signature.

In Java, a class always extends one other class. It also may implement one or more interfaces.

Interfaces allow us to treat objects with different classes similarly. For instance, in Java, we have an interface called Comparable. If we were to write a sorting function, it would take an array of Comparable elements as an argument. It doesn't matter what the elements actually are, if it's Strings or Integers or Money, the sorting function will treat them in the same way.

```java
interface ComparableToOranges {
  int compareTo(Orange orange);
}

class Apple implements ComparableToOranges {
  int compareTo(Orange orange) { ... }
}

class Orange implements ComparableToOranges {
  int compareTo(Orange orange) { ... }
}

// Don't have to write separate functions
// for Apples and Oranges!
function sortOranges(ComparableToOranges[] kindaOranges) {
  ...
}
```

With classes, a subclass inherits the code of its parent. So classes solve the same problem as interfaces. They minimize code duplication, but they do it  from a different angle.

```java
class DefaultOrange {
  void peel() {...}
  String getTaste() { return "ok"; }
}

// Don't have to reimplement `peel()`!
class MoroccanOrange extends DefaultOrange {
  @Override
  String getTaste() { return "amazing!"; }
}
```

## Parametric types

One powerful feature that many type systems have is **parametric types** or **generics**. TypeScript, Java, Haskell and other languages have it. Go, infamously, doesn't have it.

The simplest example is a List of things. Sometimes we'd like to reflect in the type, which properties do things in a specific list have. What we can and can not do with those things. For example, if we have a list of comparable things, we can sort it. If we have a list of numbers, we can some them up.


```java
// Can't do much with the values of this list.
// Can only do operations on the list itself:
// get the length, slice and so on.
List list1;

// Can sort the values of this list.
List<T extends Comparable> list2;
```

## Algebraic!

![Algebraic! Adventure Time](https://cloud.githubusercontent.com/assets/610717/23235064/6cb40f8a-f954-11e6-9d1e-01adbe0cc5df.png)

One powerful instrument that Java or C# don't support is a **Sum Type** also called a **Union Type**. Sum type is a part of a larger concept that's called Algebraic Data Type, or ADT for short. When people talk about languages that support ADT they often mean languages that support a Sum Type. There's also a Product Type, but that one is supported by most of the Type Systems out there.

Let's start with the **Product Type** because it's a simpler one. Product Type is also sometimes called a Tuple Type. For example, type "Person" could be a combination of two Strings, first name and last name.

```haskell
-- Person is a Product Type
data Person = Person String String

-- Names of the fields are not part of the type.
-- It's just syntax sugar. This is the same
-- *type* as above:
data Person = Person {
  firstName :: String,
  lastName :: String
}
```

So what's the *Sum Type* and what's the big deal about it? Let's say you're talking to a doctor.. at some point they ask you how you are feeling. Depending on a situation you may say "I'm feeling good". Or you may say "I'm feeling sick" and you would go on to describe the symptoms and when it started and what you've been doing about it.

What's the type of your answer if you can only be in two states? In C++ or Java, we could use an Enum with two values "Healthy" or "Sick". But how would we encode all that extra information that comes with the "Sick" state?

Another way to look at it is to say there's a type called Healthy and there's a type called "Sick" and the "Sick" type has extra information that comes with it like a list of symptoms, a start date, a list of preventive measures. And the type of the Answer is a union of those to two types. It's an Either Healthy or Sick type, so to say.

Another example. A Union Type could be used to describe a networking state. We're either connecting, connected or disconnected. Each concrete state might have extra specific details to it. "Duration of connection" for instance is only relevant for "Connected" state, it doesn't make sense unless we're connected.

```haskell
data Healthy = Healthy
data Sick = Sick {
  symptoms :: [String],
  dateStarted :: Day
}
data AnswerToTheDoctor = Healthy | Sick

--

data Connecting = Connecting { started :: UTCTime }
data Connected = Connected {
  duration :: Int,
  bytesTransferred :: Int
}
data Disconnected = Disconnected
data ConnectionState = Connecting | Connected | Disconnected

data Connection = Connection {
  address :: String,
  state :: ConnectionState
}
let c = Connection "0.0.0.0" Disconnected
-- Connection {address = "0.0.0.0", state = Disconnected}
```


## What's a Monad? 😫

According to [Haskell Wiki](https://wiki.haskell.org/Monad):

> The essence of monad is thus separation of composition timeline from the composed computation's execution timeline, as well as the ability of computation to implicitly carry extra data, as pertaining to the computation itself, in addition to its one (hence the name) output, that it will produce when run (or queried, or called upon)

Now that we've got that out of the way, let's talk **Type Classes**!!

Type Class is a way to declare a type signature and then, independently, write an implementation of this type signature for any data type in the system.

Type Classes in Haskell are similar to Interfaces in Java and TypeScript. Both Type Classes and Interfaces describe a group of operations that can be performed on an object. Remember the example of a Comparable interface in Java. The difference is that we can make a data type part of a type class even if we don't have control over its source code.

Let's say we are writing a library that converts values to their JSON representation. In Java, we can declare an interface "ConvertableToJSON" with one method convert() that returns a JSON representation of an object. Logically, String and Integer do have a JSON representation. But in practice, we can't make Integer or String classes implement this interface because we don't have control over their source code. We'll have to work around it somehow.

In Haskell, on the other hand, we *can* make Integer and String part of the ConvertableToJSON Type Class, no problem. We'll just have to implement convert() function for both of those data types.

```java
// In Java...

interface ConvertableToJSON {
  String convert();
}

// OK
class Person implements ConvertableToJSON {}

// Not OK :( We can't redefine Integer
class Integer implements ConvertableToJSON {}

/*********************************************/
```

```haskell
-- In Haskell...

-- Defining type signature
type ConvertableToJSON a where
  convert :: a -> String

-- Implementing the type class for a built-in data type
instance ConvertableToJSON Integer where
  convert x = show x

convert 1
-- "1"

-- Implementing the type class for a custom data type
instance ConvertableToJSON Person where
  convert (Person firstName lastName) =
    "{\"name\":" ++ (show firstName)
    ++ ",\"surname\":" ++ (show lastName) ++ "}"

convert (Person "Haskell" "Curry")
-- "{\"name\":\"Haskell\",\"surname\":\"Curry\"}"
```

And *Monad* is just another type class. There you go 🎩

