type EventType = 'click' | 'scroll'| 'mousemove';
type EventHandler = Exclude<EventType, 'scroll'>;
const handleEvent = (event:EventType) => {
    console.log(event);
}
handleEvent('click');
handleEvent('scroll');