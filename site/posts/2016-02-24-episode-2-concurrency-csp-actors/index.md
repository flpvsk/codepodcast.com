---
title: "Episode 2: Concurrency – CSP & Actors"
date: 2016-02-24
---

<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/248919399&amp;color=0066cc&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>

Multithreading is not the only approach we use to deal with concurrency. Single-purpose processes is our next frontier. Processes, that don`t have shared state. To coordinate, they pass messages to each other.

We can build complex concurrent systems using simple principles of CSP or Actors model. We break down programs into independent processes, each performing some specific job, talking to each other. How they talk to each is the point of contention here. That`s where the differences between CSP and Actors arise.

**Host:** Andrey Salomatin [flpvsk.com](https://flpvsk.com)

### Guests ###

- **Aaron Schlesinger** [arschles.com/](http://arschles.com/)
- **Jörgen Brandt** [http://www.joergen-brandt.de/](http://www.joergen-brandt.de/)

### Sources ###

**CSP**
   * “Communicating Sequential Processes” orignial paper by C. A. R.
     Hoarek<br />
     [http://www.usingcsp.com/
     cspbook.pdf](http://www.usingcsp.com/cspbook.pdf)


**Go**
  * “Go in 5 minutes” screencast by Aaron<br/>
    [https://www.youtube.com/channel/UC2GHqYE3fVJMncbrRd8AqcA](https://www.youtube.com/channel/UC2GHqYE3fVJMncbrRd8AqcA)
  * “Effective Go”<br/>
    [https://golang.org/doc/effective_go.html](https://golang.org/doc/effective_go.html)
  * “Go Concurrency Patterns” talk by Rob Pike<br/>
    [https://talks.golang.org/2012/concurrency.slide#1](https://talks.golang.org/2012/concurrency.slide#1)
  * net/context documentation<br/>
    [https://godoc.org/golang.org/x/net/context](https://godoc.org/golang.org/x/net/context)
  *  WebSockets documentation<br/>
     [https://godoc.org/golang.org/x/net/websocket](https://godoc.org/golang.org/x/net/websocket)


**Actors**
  * “A Universal Modular Actor Formalism for Artificial Intelligence”
    original paper by Carl Hewitt; Peter Bishop; Richard Steiger<br/>
    [http://worrydream.com/refs/Hewitt-ActorModel.pdf](http://worrydream.com/refs/Hewitt-ActorModel.pdf)


**Erlang**
  * “Learn You Some Erlang for great good!” by Fred Hébert<br/>
    [http://learnyousomeerlang.com/](http://learnyousomeerlang.com/)
  * “Programming Erlang” by Joe Armstrong<br/>
  [http://amzn.to/1UnfJpB](http://amzn.to/1UnfJpB)

###Projects to check out###


**Go**
  * Docker<br/>
    [https://github.com/docker/docker](https://github.com/docker/docker)
  * “Awesome Go” – a curated list of awesome Go frameworks, libraries and
    software<br />
    [https://github.com/avelino/awesome-go](https://github.com/avelino/awesome-go)

**Parallelism**
  *  Cuneiform<br />
    [http://www.cuneiform-lang.org/](http://www.cuneiform-lang.org/)

###Music###

Mid-Air! [@mid_air](https://soundcloud.com/mid_air)


----------

PS: Links to Amazon are referral. You can use them to support the show.

