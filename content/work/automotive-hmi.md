---
title: "Automotive HMI Prototyping"
subtitle: "A physical testbed for automotive HMI design"
hasImages: false
---


Source: live page text at /agile-testing-hmi/ (real HTML text, not a slide deck).

## Introduction
Testing Automotive HMI is challenging due to the variety of inputs available to the driver, including steering wheels, infotainment systems, gauge clusters, and voice commands. The instrument was designed to integrate with Unreal Engine for simulating real-world designs.

[Image: photograph of a steering wheel component against a light background]

## Steering Wheel Construction
The steering wheel uses 3D-printed segments, which are epoxied together and wrapped with black tape. It's a full 1:1 scale replica with a center hole for standard steering column shafts and includes a cutout for housing a programmable control deck.

[Image: close-up detail photograph of wheel construction]

## Control Deck
A programmable control deck offers infinite configurability with buttons arranged in a three-by-three grid layout. An Arduino microcontroller manages the system's customizable functionality.

[Image: photograph showing the control deck embedded in the wheel center]

## Modularity & Configuration
Control decks are easily swapped out for rapid testing of different configurations.

[Images: animated GIF sequence demonstrating the deck-swapping process]

## Software Integration
The setup leverages freely available programming assets within Unreal Engine to enable communication between 4D objects and interactive interfaces.

[Image: technical screenshot showing Unreal Engine interface integration]
[Image: animated GIF demonstrating real-time simulation interaction]

## Conclusion
This Arduino-controlled steering wheel testbed offers a versatile and scalable solution for testing automotive HMI designs, combining customizable 3D-printed components with Unreal Engine integration for precise scenario simulation.
