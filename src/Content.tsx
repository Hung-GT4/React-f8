import * as React from 'react';
import { useEffect, useState } from 'react';

//Side effect : khi có tác động dẫn tới dữ liệu của chương trình bị thay đổi

///useEffect hook 
// Events : Add / remove event listener
// Observer pattern : Subscribe / unsubscribe
// Closure
// Timers : setInterval , setTimeout , clearInterval , clearTimeout
// useState
// Mounted / unmounted
// Call API


// làm demo 
// 1. Update DOM
//       F8 blog title
// 2. Call API
// 3. Listen DOM events
// * /
//       Scroll
//       Resize
// 4. Cleanup
//       Remove listener / Unsubscribe
//         Clear timer



function Content() {
      //callback(bắt buộc): thực hiện call api, k listenDOM
      //deps không bắt buộc
      //useEffect(callback,[deps])

      // cách trường hợp useEffect
      //1. useEffect(callback)
      // - Gọi callback mỗi khi component re-render 
      // - Gọi callback sau khi component thêm element vào DOM
      // 2. useEffect(callback,[])
      // 3. useEffect(callback, [deps])
      // ------------------------------------
      // 1. Callback luôn được gọi sau khi component mounted

      const [title, setTitle] = useState('')

      useEffect(() => {
            document.title = title;
            fetch('https://jsonplaceholder.typicode.com/posts')
                  .then(res => res.json())
                  .then(posts => {
                        console.log(posts);
                  })
      })
      return (
            <div>
                  <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                  />
            </div>
      )
}

export default Content