```javascript
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function MyComponent() {
  const router = useRouter();

  const handleRouteChange = (href) => {
    router.push(href, {scroll: false});
  };

  return (
    <div>
      <button onClick={() => handleRouteChange('/')}>Home</button>
      <button onClick={() => handleRouteChange('/about')}>About</button>      
    </div>
  );
}

export default MyComponent;
```