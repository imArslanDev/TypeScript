// Enums
// Group of named constans

// typescript special feature
// not in JavaScript

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

function getUserDirection(direction: Direction): void {
  if (direction === Direction.UP) {
    console.log("User is going up");
  } else if (direction === Direction.DOWN) {
    console.log("User is going down");
  } else if (direction === Direction.LEFT) {
    console.log("User is going left");
  } else if (direction === Direction.RIGHT) {
    console.log("User is going right");
  }
}

// Enums Values
// Defualt 0 sa start hoti ha order wise but ap change kr skta ho
// Then wo auto increment hote jai ga
// Baqi ap custom value bhi set kr skta ho.

// enum ResponseType {
//     HEALTHY = 200,
//     WEEK,
//     NORMAL,
//     BAD
// }

enum ResponseType {
  HEALTHY = "HEALTHY",
  WEEK = "WEEK",
  NORMAL = "NORMAL",
  BAD = "BAD",
}
console.log(ResponseType.HEALTHY);
console.log(ResponseType.WEEK);
console.log(ResponseType.NORMAL);
console.log(ResponseType.BAD);

// Many developers not use enums becuase it creates to much code after transpiled in JS
// So is ka solution ka lia hum use krta ha const enums
const enum OrderStatus {
  DELIVERED,
  CANCELLED,
  RETURNED,
  PENDING,
}

function generateMessageForUser(status: OrderStatus): void {
  if (status === OrderStatus.DELIVERED) {
    console.log("Successfully Delivered");
  }
}

generateMessageForUser(OrderStatus.DELIVERED);
