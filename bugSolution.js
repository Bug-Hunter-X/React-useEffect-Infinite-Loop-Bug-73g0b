```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: set count only once on mount
    //No need for this statement now.
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```