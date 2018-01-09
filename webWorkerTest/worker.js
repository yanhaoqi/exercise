/**
 * Created by yanhaoqi on 2018/1/9.
 */
var newPixels
onmessage = function(event){
    event = event || window.event
    console.log('worker接收到的data', event.data)
    newPixels = event.data
    // console.log(event.data.data instanceof Array, typeof(event.data.data[0]))
    // console.log(event.data.data[0])
    // newPixels.reverse()
    for (var i = 0; i < newPixels.data.length; i++) {
        // event.data.data[i]  = 255 - event.data.data[i]
        event.data.data[i]  = 120 + event.data.data[i]
    }
    postMessage(newPixels)
}