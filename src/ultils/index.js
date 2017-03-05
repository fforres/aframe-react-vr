const radius = 3
const circumference = radius*2*Math.PI

export const circularPositionFromIndex = (index, boxSize) => {
  let itemsPerCircle = Math.floor(circumference/(boxSize*2)) // Distance between boxes = box size;
  let radiansPerIndex = (Math.PI*2)/itemsPerCircle // Javascript usea radians, no degrees;

  let yIndex = Math.floor(index/itemsPerCircle)
  let y = yIndex % 2 === 0 ? (yIndex*boxSize)*-1 : Math.ceil(yIndex*boxSize)

  let circleIndex = index % itemsPerCircle
  let angle = circleIndex * radiansPerIndex
  let x = 0 + Math.sin(angle)*radius
  let z = 0 + Math.cos(angle)*radius

  return {x, y , z}
}
