---
title: "Automotive HMI Prototyping"
subtitle: "A physical testbed for automotive HMI design"
hasImages: true
order: 6
cardTitle: "Prototyping Instrument for Automotive HMI"
---


Source: live page text at /agile-testing-hmi/ (real HTML text, not a slide deck).

## Introduction
Testing Automotive HMI is challenging due to the variety of inputs available to the driver, including steering wheels, infotainment systems, gauge clusters, and voice commands. The instrument was designed to integrate with Unreal Engine for simulating real-world designs.

[Image: photograph of a steering wheel component against a light background]

![](/work/automotive-hmi/001.png)

## Steering Wheel Construction
The steering wheel uses 3D-printed segments, which are epoxied together and wrapped with black tape. It's a full 1:1 scale replica with a center hole for standard steering column shafts and includes a cutout for housing a programmable control deck.

[Image: close-up detail photograph of wheel construction]

![](/work/automotive-hmi/002.gif)

## Control Deck
A programmable control deck offers infinite configurability with buttons arranged in a three-by-three grid layout. An Arduino microcontroller manages the system's customizable functionality.

[Image: photograph showing the control deck embedded in the wheel center]

![](/work/automotive-hmi/003.png)

## Modularity & Configuration
Control decks are easily swapped out for rapid testing of different configurations.

[Images: animated GIF sequence demonstrating the deck-swapping process]

![](/work/automotive-hmi/004.png)
![](/work/automotive-hmi/005.png)

## Software Integration
The setup leverages freely available programming assets within Unreal Engine to enable communication between 4D objects and interactive interfaces.

[Image: technical screenshot showing Unreal Engine interface integration]

![](/work/automotive-hmi/006.gif)
[Image: animated GIF demonstrating real-time simulation interaction]

![](/work/automotive-hmi/007.png)

## Conclusion
This Arduino-controlled steering wheel testbed offers a versatile and scalable solution for testing automotive HMI designs, combining customizable 3D-printed components with Unreal Engine integration for precise scenario simulation.
