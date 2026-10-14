import { images } from "@/data/images";

export const placedLearners = images.placed.map((image, index) => ({
  id: `placed-learner-${index + 1}`,
  name: "[Student name]",
  role: "[Role] at [Company]",
  package: "[Package] LPA",
  image,
}));

export const placementEvents = images.placementEvents.map((image, index) => ({
  id: `placement-event-${index + 1}`,
  caption: `[Placement drive photo ${index + 1}]`,
  image,
}));
