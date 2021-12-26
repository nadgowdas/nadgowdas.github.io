---
layout: page
title: Paracloud
description: Making  your applications aware of cloud
img: assets/img/4.jpg
importance: 1
category: work
---


As containers became popular around 2015-16, I got opportunity to be on the front and build cloud platform for containers. And then, started working on building various micro-service applications on that cloud. Containers obviously had a major attractions that we didn't had to change our applications. THe novel container image packaging with Docker, allowed us to easily port existing applications to containers.

As I was building more and more of these applications, I thought how much (as a user) do I desire to port my application "as-is" without any refactoring ? And then, through some discussion with my colleagues, we came up with few use-cases where it would make more sense to  make our applications aware of the underlying cloud infrastructure. And then came up with this idea of "Paracloud", in which we change the packaging/runtime of our applications to make them aware that they are running on cloud and see if that can assist with routine cloud management functions like load-balacing/monitoring/migration. We had submitted a short paper on this idea at  <a href="https://www.usenix.org/conference/hotcloud17/program/presentation/nadgowda">Usenix HotCloud'17</a> workshop. 

Nowadays, kubernetes "operators" have made this a common design patterns. We are building more and more specialized operators by embedding application specific knowledge into them to manage their lifecycle.

If you want to learn more about "Paracloud", I have listed some resources below:

### Paper Abstract:
Applications have commonly been oblivious to their cloud runtimes. This is primarily because they started their journey in IaaS clouds, running on a guestOS inside VMs. Then to increase performance, many guestOSes have been paravirtualized making them virtualization aware, so that they can bypass some of the virtualization layers, as in virtio. This approach still kept applications unmodified. Recently, we are witnessing a rapid adoption of containers due to their packaging benefits, high density, fast start-up and low overhead. Applications are increasingly being on-boarded to PaaS clouds in the form of application containers or appc, where they are run directly on a cloud substrate like Kubernetes or Docker Swarm. This shift in deployment practices present an opportunity to make applications aware of their cloud. In this paper, we present Paracloud framework for application containers and discuss the Paracloud interface (PaCI) for three cloud operations namely migration, auto-scaling and load-balancing.

### Paper Link: 
<a href="https://www.usenix.org/conference/hotcloud17/program/presentation/nadgowda">Click Here</a> 


