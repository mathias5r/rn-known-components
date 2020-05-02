function handler(elementRef, width, height, first, isFirst) {
  let div = elementRef.parentElement;
  div.style.width = `${width}px`;
  div.style.height = `${height}px`;
  div.style.overflow = 'hidden';
  if (isFirst) {
    first.appendChild(div);
  }
}
