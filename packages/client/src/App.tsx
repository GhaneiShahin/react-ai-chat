import { useEffect, useState } from 'react';
import { Button } from './components/ui/button';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="py-10 flex flex-col justify-center items-center">
      <p className="text-red-500 p-4 text-3xl font-bold text-center">
        {message}
      </p>
      <Button className="w-1/2">CLICK ME</Button>
    </div>
  );
}

export default App;
