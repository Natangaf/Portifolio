
import { useEffect, useRef } from 'react';
export function NextPage() {
  const conteinerRef = useRef<HTMLInputElement>("JSX")
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    }

    const observer = new IntersectionObserver(([entry]) => { 
      if (entry.isIntersecting) {
        observer.disconnect();
        console.log("here");
      }
    }, options);
    observer.observe(conteinerRef.current)
}, [])
return (
  <div ref={conteinerRef} />
);
}
