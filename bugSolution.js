```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Alice');

  useEffect(() => {
    // Correctly includes both count and name in the dependency array
    console.log('Component rendered with count:', count, 'and name:', name);
  }, [count, name]); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName('Bob')}>Change Name</button>
    </div>
  );
}
```