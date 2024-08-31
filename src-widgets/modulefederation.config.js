const makeFederation = require('@iobroker/vis-2-widgets-react-dev/modulefederation.config');

module.exports = makeFederation(
    'vis2csicomtestWidgets',
    {
        './csicom1': './src/csicom1',
        './translations': './src/translations',
    }
);