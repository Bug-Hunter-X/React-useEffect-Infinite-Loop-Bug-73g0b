```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: setting count to 1 on every render
    setCount(1);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```