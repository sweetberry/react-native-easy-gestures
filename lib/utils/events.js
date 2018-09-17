/*
 * Get current touches
 *
 * @param {Object} initial event
 * @return {Array}
 */
export const getTouches = (event) => event.nativeEvent.touches;

/*
 * Get angle
 *
 * Diff between current angle and initial angle
 *
 * @param {Object} initial event
 * @param {Object} styles
 * @param {Number} diff
 * @param {Number} snapThreshold
 * @return {Number} angle
 */
export const getAngle = (event, styles, diffAngle, scalable) => {
  const { transform = [] } = styles;

  const currentAngle = parseFloat(
    transform
      .map((style) => style.rotate)
      .reduce((a, b) => b || a, 0)
    , 0);

  if (scalable.separate){
    return currentAngle;
  }else{
    return currentAngle - diffAngle;
  }
};

/*
 * Get scale
 *
 * @param {Object} initial event
 * @param {Object} styles
 * @param {Number} diff
 * @return {Number} scale
 */
export const getScale = (event, styles, diffDistance) => {
  const { transform = [] } = styles;

  const currentScale = transform
    .map((style) => style.scale)
    .reduce((a, b) => b || a, 1);

  const newScale = currentScale - (diffDistance / 400);

  return newScale;
};

export const getScaleX = (event, styles, diffDistance) => {
  const { transform = [] } = styles;

  const currentScale = transform
    .map((style) => style.scaleX)
    .reduce((a, b) => b || a, 1);

  const newScale = currentScale - (diffDistance / 400);

  return newScale;
};

export const getScaleY = (event, styles, diffDistance) => {
  const { transform = [] } = styles;

  const currentScale = transform
    .map((style) => style.scaleY)
    .reduce((a, b) => b || a, 1);

  const newScale = currentScale - (diffDistance / 400);

  return newScale;
};


/*
 * Is multi touch
 *
 * @param {Object} initial event
 * @return {Boolean}
 */
export const isMultiTouch = (event) => {
  const currentTouches = getTouches(event);

  return currentTouches.length > 1;
};
