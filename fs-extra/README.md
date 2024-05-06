# FS-Extra

FS-Extra is a Node.js package that extends the functionality of the built-in 'fs' module with extra methods. It is built on top of the popular `fs-extra` module, providing additional features and utilities for working with the file system in Node.js applications.

## Installation

You can install FS-Extra via npm:

```bash```
npm install fs-extra-nareshkumarnandam


## Usage

```javascript
const fs = require('my-node-fs-extra');

// Now you can use fs-extra methods, along with additional features provided by MyNodeFSExtra

// Example: Copying a file asynchronously
fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) return console.error(err);
  console.log('File was copied successfully!');
});
```
## Features

- Inherits all the features of `fs-extra`, making it easy to migrate existing code.
- Adds additional functionalities for specific use cases.

## Documentation

For detailed documentation and examples, please refer to the [fs-extra documentation](https://github.com/jprichardson/node-fs-extra).

## Contributing

Contributions are welcome! If you find any bugs or want to suggest new features, please open an issue or submit a pull request on the [GitHub repository](https://github.com/nareshkumarnandam/fsextra.git).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

