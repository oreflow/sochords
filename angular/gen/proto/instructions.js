/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.instructions = (function() {

    /**
     * Namespace instructions.
     * @exports instructions
     * @namespace
     */
    var instructions = {};

    instructions.StringCombination = (function() {

        /**
         * Properties of a StringCombination.
         * @memberof instructions
         * @interface IStringCombination
         * @property {string|null} [e4] StringCombination e4
         * @property {string|null} [b] StringCombination b
         * @property {string|null} [g] StringCombination g
         * @property {string|null} [d] StringCombination d
         * @property {string|null} [a] StringCombination a
         * @property {string|null} [e2] StringCombination e2
         * @property {string|null} [chord] StringCombination chord
         * @property {string|null} [guide] StringCombination guide
         */

        /**
         * Constructs a new StringCombination.
         * @memberof instructions
         * @classdesc Represents a StringCombination.
         * @implements IStringCombination
         * @constructor
         * @param {instructions.IStringCombination=} [properties] Properties to set
         */
        function StringCombination(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringCombination e4.
         * @member {string} e4
         * @memberof instructions.StringCombination
         * @instance
         */
        StringCombination.prototype.e4 = "";

        /**
         * StringCombination b.
         * @member {string} b
         * @memberof instructions.StringCombination
         * @instance
         */
        StringCombination.prototype.b = "";

        /**
         * StringCombination g.
         * @member {string} g
         * @memberof instructions.StringCombination
         * @instance
         */
        StringCombination.prototype.g = "";

        /**
         * StringCombination d.
         * @member {string} d
         * @memberof instructions.StringCombination
         * @instance
         */
        StringCombination.prototype.d = "";

        /**
         * StringCombination a.
         * @member {string} a
         * @memberof instructions.StringCombination
         * @instance
         */
        StringCombination.prototype.a = "";

        /**
         * StringCombination e2.
         * @member {string} e2
         * @memberof instructions.StringCombination
         * @instance
         */
        StringCombination.prototype.e2 = "";

        /**
         * StringCombination chord.
         * @member {string} chord
         * @memberof instructions.StringCombination
         * @instance
         */
        StringCombination.prototype.chord = "";

        /**
         * StringCombination guide.
         * @member {string} guide
         * @memberof instructions.StringCombination
         * @instance
         */
        StringCombination.prototype.guide = "";

        /**
         * Creates a new StringCombination instance using the specified properties.
         * @function create
         * @memberof instructions.StringCombination
         * @static
         * @param {instructions.IStringCombination=} [properties] Properties to set
         * @returns {instructions.StringCombination} StringCombination instance
         */
        StringCombination.create = function create(properties) {
            return new StringCombination(properties);
        };

        /**
         * Encodes the specified StringCombination message. Does not implicitly {@link instructions.StringCombination.verify|verify} messages.
         * @function encode
         * @memberof instructions.StringCombination
         * @static
         * @param {instructions.IStringCombination} message StringCombination message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringCombination.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.e4 != null && message.hasOwnProperty("e4"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.e4);
            if (message.b != null && message.hasOwnProperty("b"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.b);
            if (message.g != null && message.hasOwnProperty("g"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.g);
            if (message.d != null && message.hasOwnProperty("d"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.d);
            if (message.a != null && message.hasOwnProperty("a"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.a);
            if (message.e2 != null && message.hasOwnProperty("e2"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.e2);
            if (message.chord != null && message.hasOwnProperty("chord"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.chord);
            if (message.guide != null && message.hasOwnProperty("guide"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.guide);
            return writer;
        };

        /**
         * Encodes the specified StringCombination message, length delimited. Does not implicitly {@link instructions.StringCombination.verify|verify} messages.
         * @function encodeDelimited
         * @memberof instructions.StringCombination
         * @static
         * @param {instructions.IStringCombination} message StringCombination message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringCombination.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringCombination message from the specified reader or buffer.
         * @function decode
         * @memberof instructions.StringCombination
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {instructions.StringCombination} StringCombination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringCombination.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.instructions.StringCombination();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.e4 = reader.string();
                    break;
                case 2:
                    message.b = reader.string();
                    break;
                case 3:
                    message.g = reader.string();
                    break;
                case 4:
                    message.d = reader.string();
                    break;
                case 5:
                    message.a = reader.string();
                    break;
                case 6:
                    message.e2 = reader.string();
                    break;
                case 7:
                    message.chord = reader.string();
                    break;
                case 8:
                    message.guide = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StringCombination message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof instructions.StringCombination
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {instructions.StringCombination} StringCombination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringCombination.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StringCombination message.
         * @function verify
         * @memberof instructions.StringCombination
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringCombination.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.e4 != null && message.hasOwnProperty("e4"))
                if (!$util.isString(message.e4))
                    return "e4: string expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isString(message.b))
                    return "b: string expected";
            if (message.g != null && message.hasOwnProperty("g"))
                if (!$util.isString(message.g))
                    return "g: string expected";
            if (message.d != null && message.hasOwnProperty("d"))
                if (!$util.isString(message.d))
                    return "d: string expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isString(message.a))
                    return "a: string expected";
            if (message.e2 != null && message.hasOwnProperty("e2"))
                if (!$util.isString(message.e2))
                    return "e2: string expected";
            if (message.chord != null && message.hasOwnProperty("chord"))
                if (!$util.isString(message.chord))
                    return "chord: string expected";
            if (message.guide != null && message.hasOwnProperty("guide"))
                if (!$util.isString(message.guide))
                    return "guide: string expected";
            return null;
        };

        /**
         * Creates a StringCombination message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof instructions.StringCombination
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {instructions.StringCombination} StringCombination
         */
        StringCombination.fromObject = function fromObject(object) {
            if (object instanceof $root.instructions.StringCombination)
                return object;
            var message = new $root.instructions.StringCombination();
            if (object.e4 != null)
                message.e4 = String(object.e4);
            if (object.b != null)
                message.b = String(object.b);
            if (object.g != null)
                message.g = String(object.g);
            if (object.d != null)
                message.d = String(object.d);
            if (object.a != null)
                message.a = String(object.a);
            if (object.e2 != null)
                message.e2 = String(object.e2);
            if (object.chord != null)
                message.chord = String(object.chord);
            if (object.guide != null)
                message.guide = String(object.guide);
            return message;
        };

        /**
         * Creates a plain object from a StringCombination message. Also converts values to other types if specified.
         * @function toObject
         * @memberof instructions.StringCombination
         * @static
         * @param {instructions.StringCombination} message StringCombination
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringCombination.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.e4 = "";
                object.b = "";
                object.g = "";
                object.d = "";
                object.a = "";
                object.e2 = "";
                object.chord = "";
                object.guide = "";
            }
            if (message.e4 != null && message.hasOwnProperty("e4"))
                object.e4 = message.e4;
            if (message.b != null && message.hasOwnProperty("b"))
                object.b = message.b;
            if (message.g != null && message.hasOwnProperty("g"))
                object.g = message.g;
            if (message.d != null && message.hasOwnProperty("d"))
                object.d = message.d;
            if (message.a != null && message.hasOwnProperty("a"))
                object.a = message.a;
            if (message.e2 != null && message.hasOwnProperty("e2"))
                object.e2 = message.e2;
            if (message.chord != null && message.hasOwnProperty("chord"))
                object.chord = message.chord;
            if (message.guide != null && message.hasOwnProperty("guide"))
                object.guide = message.guide;
            return object;
        };

        /**
         * Converts this StringCombination to JSON.
         * @function toJSON
         * @memberof instructions.StringCombination
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringCombination.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StringCombination;
    })();

    instructions.TabInstructionBlock = (function() {

        /**
         * Properties of a TabInstructionBlock.
         * @memberof instructions
         * @interface ITabInstructionBlock
         * @property {Array.<instructions.IStringCombination>|null} [picks] TabInstructionBlock picks
         */

        /**
         * Constructs a new TabInstructionBlock.
         * @memberof instructions
         * @classdesc Represents a TabInstructionBlock.
         * @implements ITabInstructionBlock
         * @constructor
         * @param {instructions.ITabInstructionBlock=} [properties] Properties to set
         */
        function TabInstructionBlock(properties) {
            this.picks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TabInstructionBlock picks.
         * @member {Array.<instructions.IStringCombination>} picks
         * @memberof instructions.TabInstructionBlock
         * @instance
         */
        TabInstructionBlock.prototype.picks = $util.emptyArray;

        /**
         * Creates a new TabInstructionBlock instance using the specified properties.
         * @function create
         * @memberof instructions.TabInstructionBlock
         * @static
         * @param {instructions.ITabInstructionBlock=} [properties] Properties to set
         * @returns {instructions.TabInstructionBlock} TabInstructionBlock instance
         */
        TabInstructionBlock.create = function create(properties) {
            return new TabInstructionBlock(properties);
        };

        /**
         * Encodes the specified TabInstructionBlock message. Does not implicitly {@link instructions.TabInstructionBlock.verify|verify} messages.
         * @function encode
         * @memberof instructions.TabInstructionBlock
         * @static
         * @param {instructions.ITabInstructionBlock} message TabInstructionBlock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TabInstructionBlock.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.picks != null && message.picks.length)
                for (var i = 0; i < message.picks.length; ++i)
                    $root.instructions.StringCombination.encode(message.picks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TabInstructionBlock message, length delimited. Does not implicitly {@link instructions.TabInstructionBlock.verify|verify} messages.
         * @function encodeDelimited
         * @memberof instructions.TabInstructionBlock
         * @static
         * @param {instructions.ITabInstructionBlock} message TabInstructionBlock message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TabInstructionBlock.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TabInstructionBlock message from the specified reader or buffer.
         * @function decode
         * @memberof instructions.TabInstructionBlock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {instructions.TabInstructionBlock} TabInstructionBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TabInstructionBlock.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.instructions.TabInstructionBlock();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.picks && message.picks.length))
                        message.picks = [];
                    message.picks.push($root.instructions.StringCombination.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TabInstructionBlock message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof instructions.TabInstructionBlock
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {instructions.TabInstructionBlock} TabInstructionBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TabInstructionBlock.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TabInstructionBlock message.
         * @function verify
         * @memberof instructions.TabInstructionBlock
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TabInstructionBlock.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.picks != null && message.hasOwnProperty("picks")) {
                if (!Array.isArray(message.picks))
                    return "picks: array expected";
                for (var i = 0; i < message.picks.length; ++i) {
                    var error = $root.instructions.StringCombination.verify(message.picks[i]);
                    if (error)
                        return "picks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TabInstructionBlock message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof instructions.TabInstructionBlock
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {instructions.TabInstructionBlock} TabInstructionBlock
         */
        TabInstructionBlock.fromObject = function fromObject(object) {
            if (object instanceof $root.instructions.TabInstructionBlock)
                return object;
            var message = new $root.instructions.TabInstructionBlock();
            if (object.picks) {
                if (!Array.isArray(object.picks))
                    throw TypeError(".instructions.TabInstructionBlock.picks: array expected");
                message.picks = [];
                for (var i = 0; i < object.picks.length; ++i) {
                    if (typeof object.picks[i] !== "object")
                        throw TypeError(".instructions.TabInstructionBlock.picks: object expected");
                    message.picks[i] = $root.instructions.StringCombination.fromObject(object.picks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TabInstructionBlock message. Also converts values to other types if specified.
         * @function toObject
         * @memberof instructions.TabInstructionBlock
         * @static
         * @param {instructions.TabInstructionBlock} message TabInstructionBlock
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TabInstructionBlock.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.picks = [];
            if (message.picks && message.picks.length) {
                object.picks = [];
                for (var j = 0; j < message.picks.length; ++j)
                    object.picks[j] = $root.instructions.StringCombination.toObject(message.picks[j], options);
            }
            return object;
        };

        /**
         * Converts this TabInstructionBlock to JSON.
         * @function toJSON
         * @memberof instructions.TabInstructionBlock
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TabInstructionBlock.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TabInstructionBlock;
    })();

    instructions.TabInstruction = (function() {

        /**
         * Properties of a TabInstruction.
         * @memberof instructions
         * @interface ITabInstruction
         * @property {Array.<instructions.ITabInstructionBlock>|null} [tabBlocks] TabInstruction tabBlocks
         */

        /**
         * Constructs a new TabInstruction.
         * @memberof instructions
         * @classdesc Represents a TabInstruction.
         * @implements ITabInstruction
         * @constructor
         * @param {instructions.ITabInstruction=} [properties] Properties to set
         */
        function TabInstruction(properties) {
            this.tabBlocks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TabInstruction tabBlocks.
         * @member {Array.<instructions.ITabInstructionBlock>} tabBlocks
         * @memberof instructions.TabInstruction
         * @instance
         */
        TabInstruction.prototype.tabBlocks = $util.emptyArray;

        /**
         * Creates a new TabInstruction instance using the specified properties.
         * @function create
         * @memberof instructions.TabInstruction
         * @static
         * @param {instructions.ITabInstruction=} [properties] Properties to set
         * @returns {instructions.TabInstruction} TabInstruction instance
         */
        TabInstruction.create = function create(properties) {
            return new TabInstruction(properties);
        };

        /**
         * Encodes the specified TabInstruction message. Does not implicitly {@link instructions.TabInstruction.verify|verify} messages.
         * @function encode
         * @memberof instructions.TabInstruction
         * @static
         * @param {instructions.ITabInstruction} message TabInstruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TabInstruction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tabBlocks != null && message.tabBlocks.length)
                for (var i = 0; i < message.tabBlocks.length; ++i)
                    $root.instructions.TabInstructionBlock.encode(message.tabBlocks[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TabInstruction message, length delimited. Does not implicitly {@link instructions.TabInstruction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof instructions.TabInstruction
         * @static
         * @param {instructions.ITabInstruction} message TabInstruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TabInstruction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TabInstruction message from the specified reader or buffer.
         * @function decode
         * @memberof instructions.TabInstruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {instructions.TabInstruction} TabInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TabInstruction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.instructions.TabInstruction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.tabBlocks && message.tabBlocks.length))
                        message.tabBlocks = [];
                    message.tabBlocks.push($root.instructions.TabInstructionBlock.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TabInstruction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof instructions.TabInstruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {instructions.TabInstruction} TabInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TabInstruction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TabInstruction message.
         * @function verify
         * @memberof instructions.TabInstruction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TabInstruction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tabBlocks != null && message.hasOwnProperty("tabBlocks")) {
                if (!Array.isArray(message.tabBlocks))
                    return "tabBlocks: array expected";
                for (var i = 0; i < message.tabBlocks.length; ++i) {
                    var error = $root.instructions.TabInstructionBlock.verify(message.tabBlocks[i]);
                    if (error)
                        return "tabBlocks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a TabInstruction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof instructions.TabInstruction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {instructions.TabInstruction} TabInstruction
         */
        TabInstruction.fromObject = function fromObject(object) {
            if (object instanceof $root.instructions.TabInstruction)
                return object;
            var message = new $root.instructions.TabInstruction();
            if (object.tabBlocks) {
                if (!Array.isArray(object.tabBlocks))
                    throw TypeError(".instructions.TabInstruction.tabBlocks: array expected");
                message.tabBlocks = [];
                for (var i = 0; i < object.tabBlocks.length; ++i) {
                    if (typeof object.tabBlocks[i] !== "object")
                        throw TypeError(".instructions.TabInstruction.tabBlocks: object expected");
                    message.tabBlocks[i] = $root.instructions.TabInstructionBlock.fromObject(object.tabBlocks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a TabInstruction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof instructions.TabInstruction
         * @static
         * @param {instructions.TabInstruction} message TabInstruction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TabInstruction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tabBlocks = [];
            if (message.tabBlocks && message.tabBlocks.length) {
                object.tabBlocks = [];
                for (var j = 0; j < message.tabBlocks.length; ++j)
                    object.tabBlocks[j] = $root.instructions.TabInstructionBlock.toObject(message.tabBlocks[j], options);
            }
            return object;
        };

        /**
         * Converts this TabInstruction to JSON.
         * @function toJSON
         * @memberof instructions.TabInstruction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TabInstruction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TabInstruction;
    })();

    /**
     * ChordType enum.
     * @name instructions.ChordType
     * @enum {string}
     * @property {number} UNKNOWN_CHORD=0 UNKNOWN_CHORD value
     * @property {number} A=1 A value
     * @property {number} B=2 B value
     * @property {number} C=3 C value
     * @property {number} D=4 D value
     * @property {number} E=5 E value
     * @property {number} F=6 F value
     * @property {number} G=7 G value
     */
    instructions.ChordType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_CHORD"] = 0;
        values[valuesById[1] = "A"] = 1;
        values[valuesById[2] = "B"] = 2;
        values[valuesById[3] = "C"] = 3;
        values[valuesById[4] = "D"] = 4;
        values[valuesById[5] = "E"] = 5;
        values[valuesById[6] = "F"] = 6;
        values[valuesById[7] = "G"] = 7;
        return values;
    })();

    instructions.Chord = (function() {

        /**
         * Properties of a Chord.
         * @memberof instructions
         * @interface IChord
         * @property {instructions.ChordType|null} [chordType] Chord chordType
         * @property {string|null} [name] Chord name
         */

        /**
         * Constructs a new Chord.
         * @memberof instructions
         * @classdesc Represents a Chord.
         * @implements IChord
         * @constructor
         * @param {instructions.IChord=} [properties] Properties to set
         */
        function Chord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chord chordType.
         * @member {instructions.ChordType} chordType
         * @memberof instructions.Chord
         * @instance
         */
        Chord.prototype.chordType = 0;

        /**
         * Chord name.
         * @member {string} name
         * @memberof instructions.Chord
         * @instance
         */
        Chord.prototype.name = "";

        /**
         * Creates a new Chord instance using the specified properties.
         * @function create
         * @memberof instructions.Chord
         * @static
         * @param {instructions.IChord=} [properties] Properties to set
         * @returns {instructions.Chord} Chord instance
         */
        Chord.create = function create(properties) {
            return new Chord(properties);
        };

        /**
         * Encodes the specified Chord message. Does not implicitly {@link instructions.Chord.verify|verify} messages.
         * @function encode
         * @memberof instructions.Chord
         * @static
         * @param {instructions.IChord} message Chord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chordType != null && message.hasOwnProperty("chordType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chordType);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified Chord message, length delimited. Does not implicitly {@link instructions.Chord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof instructions.Chord
         * @static
         * @param {instructions.IChord} message Chord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chord message from the specified reader or buffer.
         * @function decode
         * @memberof instructions.Chord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {instructions.Chord} Chord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.instructions.Chord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chordType = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof instructions.Chord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {instructions.Chord} Chord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chord message.
         * @function verify
         * @memberof instructions.Chord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chordType != null && message.hasOwnProperty("chordType"))
                switch (message.chordType) {
                default:
                    return "chordType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a Chord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof instructions.Chord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {instructions.Chord} Chord
         */
        Chord.fromObject = function fromObject(object) {
            if (object instanceof $root.instructions.Chord)
                return object;
            var message = new $root.instructions.Chord();
            switch (object.chordType) {
            case "UNKNOWN_CHORD":
            case 0:
                message.chordType = 0;
                break;
            case "A":
            case 1:
                message.chordType = 1;
                break;
            case "B":
            case 2:
                message.chordType = 2;
                break;
            case "C":
            case 3:
                message.chordType = 3;
                break;
            case "D":
            case 4:
                message.chordType = 4;
                break;
            case "E":
            case 5:
                message.chordType = 5;
                break;
            case "F":
            case 6:
                message.chordType = 6;
                break;
            case "G":
            case 7:
                message.chordType = 7;
                break;
            }
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a Chord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof instructions.Chord
         * @static
         * @param {instructions.Chord} message Chord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chordType = options.enums === String ? "UNKNOWN_CHORD" : 0;
                object.name = "";
            }
            if (message.chordType != null && message.hasOwnProperty("chordType"))
                object.chordType = options.enums === String ? $root.instructions.ChordType[message.chordType] : message.chordType;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this Chord to JSON.
         * @function toJSON
         * @memberof instructions.Chord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Chord;
    })();

    instructions.ChordInLyric = (function() {

        /**
         * Properties of a ChordInLyric.
         * @memberof instructions
         * @interface IChordInLyric
         * @property {instructions.IChord|null} [chord] ChordInLyric chord
         * @property {number|null} [offset] ChordInLyric offset
         */

        /**
         * Constructs a new ChordInLyric.
         * @memberof instructions
         * @classdesc Represents a ChordInLyric.
         * @implements IChordInLyric
         * @constructor
         * @param {instructions.IChordInLyric=} [properties] Properties to set
         */
        function ChordInLyric(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChordInLyric chord.
         * @member {instructions.IChord|null|undefined} chord
         * @memberof instructions.ChordInLyric
         * @instance
         */
        ChordInLyric.prototype.chord = null;

        /**
         * ChordInLyric offset.
         * @member {number} offset
         * @memberof instructions.ChordInLyric
         * @instance
         */
        ChordInLyric.prototype.offset = 0;

        /**
         * Creates a new ChordInLyric instance using the specified properties.
         * @function create
         * @memberof instructions.ChordInLyric
         * @static
         * @param {instructions.IChordInLyric=} [properties] Properties to set
         * @returns {instructions.ChordInLyric} ChordInLyric instance
         */
        ChordInLyric.create = function create(properties) {
            return new ChordInLyric(properties);
        };

        /**
         * Encodes the specified ChordInLyric message. Does not implicitly {@link instructions.ChordInLyric.verify|verify} messages.
         * @function encode
         * @memberof instructions.ChordInLyric
         * @static
         * @param {instructions.IChordInLyric} message ChordInLyric message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordInLyric.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chord != null && message.hasOwnProperty("chord"))
                $root.instructions.Chord.encode(message.chord, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.offset != null && message.hasOwnProperty("offset"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.offset);
            return writer;
        };

        /**
         * Encodes the specified ChordInLyric message, length delimited. Does not implicitly {@link instructions.ChordInLyric.verify|verify} messages.
         * @function encodeDelimited
         * @memberof instructions.ChordInLyric
         * @static
         * @param {instructions.IChordInLyric} message ChordInLyric message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordInLyric.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChordInLyric message from the specified reader or buffer.
         * @function decode
         * @memberof instructions.ChordInLyric
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {instructions.ChordInLyric} ChordInLyric
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordInLyric.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.instructions.ChordInLyric();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.chord = $root.instructions.Chord.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.offset = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChordInLyric message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof instructions.ChordInLyric
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {instructions.ChordInLyric} ChordInLyric
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordInLyric.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChordInLyric message.
         * @function verify
         * @memberof instructions.ChordInLyric
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChordInLyric.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chord != null && message.hasOwnProperty("chord")) {
                var error = $root.instructions.Chord.verify(message.chord);
                if (error)
                    return "chord." + error;
            }
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            return null;
        };

        /**
         * Creates a ChordInLyric message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof instructions.ChordInLyric
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {instructions.ChordInLyric} ChordInLyric
         */
        ChordInLyric.fromObject = function fromObject(object) {
            if (object instanceof $root.instructions.ChordInLyric)
                return object;
            var message = new $root.instructions.ChordInLyric();
            if (object.chord != null) {
                if (typeof object.chord !== "object")
                    throw TypeError(".instructions.ChordInLyric.chord: object expected");
                message.chord = $root.instructions.Chord.fromObject(object.chord);
            }
            if (object.offset != null)
                message.offset = object.offset | 0;
            return message;
        };

        /**
         * Creates a plain object from a ChordInLyric message. Also converts values to other types if specified.
         * @function toObject
         * @memberof instructions.ChordInLyric
         * @static
         * @param {instructions.ChordInLyric} message ChordInLyric
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChordInLyric.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.chord = null;
                object.offset = 0;
            }
            if (message.chord != null && message.hasOwnProperty("chord"))
                object.chord = $root.instructions.Chord.toObject(message.chord, options);
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            return object;
        };

        /**
         * Converts this ChordInLyric to JSON.
         * @function toJSON
         * @memberof instructions.ChordInLyric
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChordInLyric.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChordInLyric;
    })();

    instructions.ChordsAndLyrics = (function() {

        /**
         * Properties of a ChordsAndLyrics.
         * @memberof instructions
         * @interface IChordsAndLyrics
         * @property {string|null} [lyricLine] ChordsAndLyrics lyricLine
         * @property {Array.<instructions.IChordInLyric>|null} [chordsInLyric] ChordsAndLyrics chordsInLyric
         */

        /**
         * Constructs a new ChordsAndLyrics.
         * @memberof instructions
         * @classdesc Represents a ChordsAndLyrics.
         * @implements IChordsAndLyrics
         * @constructor
         * @param {instructions.IChordsAndLyrics=} [properties] Properties to set
         */
        function ChordsAndLyrics(properties) {
            this.chordsInLyric = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChordsAndLyrics lyricLine.
         * @member {string} lyricLine
         * @memberof instructions.ChordsAndLyrics
         * @instance
         */
        ChordsAndLyrics.prototype.lyricLine = "";

        /**
         * ChordsAndLyrics chordsInLyric.
         * @member {Array.<instructions.IChordInLyric>} chordsInLyric
         * @memberof instructions.ChordsAndLyrics
         * @instance
         */
        ChordsAndLyrics.prototype.chordsInLyric = $util.emptyArray;

        /**
         * Creates a new ChordsAndLyrics instance using the specified properties.
         * @function create
         * @memberof instructions.ChordsAndLyrics
         * @static
         * @param {instructions.IChordsAndLyrics=} [properties] Properties to set
         * @returns {instructions.ChordsAndLyrics} ChordsAndLyrics instance
         */
        ChordsAndLyrics.create = function create(properties) {
            return new ChordsAndLyrics(properties);
        };

        /**
         * Encodes the specified ChordsAndLyrics message. Does not implicitly {@link instructions.ChordsAndLyrics.verify|verify} messages.
         * @function encode
         * @memberof instructions.ChordsAndLyrics
         * @static
         * @param {instructions.IChordsAndLyrics} message ChordsAndLyrics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordsAndLyrics.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lyricLine != null && message.hasOwnProperty("lyricLine"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lyricLine);
            if (message.chordsInLyric != null && message.chordsInLyric.length)
                for (var i = 0; i < message.chordsInLyric.length; ++i)
                    $root.instructions.ChordInLyric.encode(message.chordsInLyric[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChordsAndLyrics message, length delimited. Does not implicitly {@link instructions.ChordsAndLyrics.verify|verify} messages.
         * @function encodeDelimited
         * @memberof instructions.ChordsAndLyrics
         * @static
         * @param {instructions.IChordsAndLyrics} message ChordsAndLyrics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordsAndLyrics.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChordsAndLyrics message from the specified reader or buffer.
         * @function decode
         * @memberof instructions.ChordsAndLyrics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {instructions.ChordsAndLyrics} ChordsAndLyrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordsAndLyrics.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.instructions.ChordsAndLyrics();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.lyricLine = reader.string();
                    break;
                case 2:
                    if (!(message.chordsInLyric && message.chordsInLyric.length))
                        message.chordsInLyric = [];
                    message.chordsInLyric.push($root.instructions.ChordInLyric.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChordsAndLyrics message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof instructions.ChordsAndLyrics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {instructions.ChordsAndLyrics} ChordsAndLyrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordsAndLyrics.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChordsAndLyrics message.
         * @function verify
         * @memberof instructions.ChordsAndLyrics
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChordsAndLyrics.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lyricLine != null && message.hasOwnProperty("lyricLine"))
                if (!$util.isString(message.lyricLine))
                    return "lyricLine: string expected";
            if (message.chordsInLyric != null && message.hasOwnProperty("chordsInLyric")) {
                if (!Array.isArray(message.chordsInLyric))
                    return "chordsInLyric: array expected";
                for (var i = 0; i < message.chordsInLyric.length; ++i) {
                    var error = $root.instructions.ChordInLyric.verify(message.chordsInLyric[i]);
                    if (error)
                        return "chordsInLyric." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ChordsAndLyrics message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof instructions.ChordsAndLyrics
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {instructions.ChordsAndLyrics} ChordsAndLyrics
         */
        ChordsAndLyrics.fromObject = function fromObject(object) {
            if (object instanceof $root.instructions.ChordsAndLyrics)
                return object;
            var message = new $root.instructions.ChordsAndLyrics();
            if (object.lyricLine != null)
                message.lyricLine = String(object.lyricLine);
            if (object.chordsInLyric) {
                if (!Array.isArray(object.chordsInLyric))
                    throw TypeError(".instructions.ChordsAndLyrics.chordsInLyric: array expected");
                message.chordsInLyric = [];
                for (var i = 0; i < object.chordsInLyric.length; ++i) {
                    if (typeof object.chordsInLyric[i] !== "object")
                        throw TypeError(".instructions.ChordsAndLyrics.chordsInLyric: object expected");
                    message.chordsInLyric[i] = $root.instructions.ChordInLyric.fromObject(object.chordsInLyric[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ChordsAndLyrics message. Also converts values to other types if specified.
         * @function toObject
         * @memberof instructions.ChordsAndLyrics
         * @static
         * @param {instructions.ChordsAndLyrics} message ChordsAndLyrics
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChordsAndLyrics.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.chordsInLyric = [];
            if (options.defaults)
                object.lyricLine = "";
            if (message.lyricLine != null && message.hasOwnProperty("lyricLine"))
                object.lyricLine = message.lyricLine;
            if (message.chordsInLyric && message.chordsInLyric.length) {
                object.chordsInLyric = [];
                for (var j = 0; j < message.chordsInLyric.length; ++j)
                    object.chordsInLyric[j] = $root.instructions.ChordInLyric.toObject(message.chordsInLyric[j], options);
            }
            return object;
        };

        /**
         * Converts this ChordsAndLyrics to JSON.
         * @function toJSON
         * @memberof instructions.ChordsAndLyrics
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChordsAndLyrics.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChordsAndLyrics;
    })();

    instructions.ChordInstruction = (function() {

        /**
         * Properties of a ChordInstruction.
         * @memberof instructions
         * @interface IChordInstruction
         * @property {Array.<instructions.IChordsAndLyrics>|null} [chordsAndLyrics] ChordInstruction chordsAndLyrics
         * @property {Array.<instructions.IChord>|null} [chords] ChordInstruction chords
         */

        /**
         * Constructs a new ChordInstruction.
         * @memberof instructions
         * @classdesc Represents a ChordInstruction.
         * @implements IChordInstruction
         * @constructor
         * @param {instructions.IChordInstruction=} [properties] Properties to set
         */
        function ChordInstruction(properties) {
            this.chordsAndLyrics = [];
            this.chords = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChordInstruction chordsAndLyrics.
         * @member {Array.<instructions.IChordsAndLyrics>} chordsAndLyrics
         * @memberof instructions.ChordInstruction
         * @instance
         */
        ChordInstruction.prototype.chordsAndLyrics = $util.emptyArray;

        /**
         * ChordInstruction chords.
         * @member {Array.<instructions.IChord>} chords
         * @memberof instructions.ChordInstruction
         * @instance
         */
        ChordInstruction.prototype.chords = $util.emptyArray;

        /**
         * Creates a new ChordInstruction instance using the specified properties.
         * @function create
         * @memberof instructions.ChordInstruction
         * @static
         * @param {instructions.IChordInstruction=} [properties] Properties to set
         * @returns {instructions.ChordInstruction} ChordInstruction instance
         */
        ChordInstruction.create = function create(properties) {
            return new ChordInstruction(properties);
        };

        /**
         * Encodes the specified ChordInstruction message. Does not implicitly {@link instructions.ChordInstruction.verify|verify} messages.
         * @function encode
         * @memberof instructions.ChordInstruction
         * @static
         * @param {instructions.IChordInstruction} message ChordInstruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordInstruction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chordsAndLyrics != null && message.chordsAndLyrics.length)
                for (var i = 0; i < message.chordsAndLyrics.length; ++i)
                    $root.instructions.ChordsAndLyrics.encode(message.chordsAndLyrics[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chords != null && message.chords.length)
                for (var i = 0; i < message.chords.length; ++i)
                    $root.instructions.Chord.encode(message.chords[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChordInstruction message, length delimited. Does not implicitly {@link instructions.ChordInstruction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof instructions.ChordInstruction
         * @static
         * @param {instructions.IChordInstruction} message ChordInstruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordInstruction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChordInstruction message from the specified reader or buffer.
         * @function decode
         * @memberof instructions.ChordInstruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {instructions.ChordInstruction} ChordInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordInstruction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.instructions.ChordInstruction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.chordsAndLyrics && message.chordsAndLyrics.length))
                        message.chordsAndLyrics = [];
                    message.chordsAndLyrics.push($root.instructions.ChordsAndLyrics.decode(reader, reader.uint32()));
                    break;
                case 2:
                    if (!(message.chords && message.chords.length))
                        message.chords = [];
                    message.chords.push($root.instructions.Chord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChordInstruction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof instructions.ChordInstruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {instructions.ChordInstruction} ChordInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordInstruction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChordInstruction message.
         * @function verify
         * @memberof instructions.ChordInstruction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChordInstruction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chordsAndLyrics != null && message.hasOwnProperty("chordsAndLyrics")) {
                if (!Array.isArray(message.chordsAndLyrics))
                    return "chordsAndLyrics: array expected";
                for (var i = 0; i < message.chordsAndLyrics.length; ++i) {
                    var error = $root.instructions.ChordsAndLyrics.verify(message.chordsAndLyrics[i]);
                    if (error)
                        return "chordsAndLyrics." + error;
                }
            }
            if (message.chords != null && message.hasOwnProperty("chords")) {
                if (!Array.isArray(message.chords))
                    return "chords: array expected";
                for (var i = 0; i < message.chords.length; ++i) {
                    var error = $root.instructions.Chord.verify(message.chords[i]);
                    if (error)
                        return "chords." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ChordInstruction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof instructions.ChordInstruction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {instructions.ChordInstruction} ChordInstruction
         */
        ChordInstruction.fromObject = function fromObject(object) {
            if (object instanceof $root.instructions.ChordInstruction)
                return object;
            var message = new $root.instructions.ChordInstruction();
            if (object.chordsAndLyrics) {
                if (!Array.isArray(object.chordsAndLyrics))
                    throw TypeError(".instructions.ChordInstruction.chordsAndLyrics: array expected");
                message.chordsAndLyrics = [];
                for (var i = 0; i < object.chordsAndLyrics.length; ++i) {
                    if (typeof object.chordsAndLyrics[i] !== "object")
                        throw TypeError(".instructions.ChordInstruction.chordsAndLyrics: object expected");
                    message.chordsAndLyrics[i] = $root.instructions.ChordsAndLyrics.fromObject(object.chordsAndLyrics[i]);
                }
            }
            if (object.chords) {
                if (!Array.isArray(object.chords))
                    throw TypeError(".instructions.ChordInstruction.chords: array expected");
                message.chords = [];
                for (var i = 0; i < object.chords.length; ++i) {
                    if (typeof object.chords[i] !== "object")
                        throw TypeError(".instructions.ChordInstruction.chords: object expected");
                    message.chords[i] = $root.instructions.Chord.fromObject(object.chords[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ChordInstruction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof instructions.ChordInstruction
         * @static
         * @param {instructions.ChordInstruction} message ChordInstruction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChordInstruction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.chordsAndLyrics = [];
                object.chords = [];
            }
            if (message.chordsAndLyrics && message.chordsAndLyrics.length) {
                object.chordsAndLyrics = [];
                for (var j = 0; j < message.chordsAndLyrics.length; ++j)
                    object.chordsAndLyrics[j] = $root.instructions.ChordsAndLyrics.toObject(message.chordsAndLyrics[j], options);
            }
            if (message.chords && message.chords.length) {
                object.chords = [];
                for (var j = 0; j < message.chords.length; ++j)
                    object.chords[j] = $root.instructions.Chord.toObject(message.chords[j], options);
            }
            return object;
        };

        /**
         * Converts this ChordInstruction to JSON.
         * @function toJSON
         * @memberof instructions.ChordInstruction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChordInstruction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChordInstruction;
    })();

    return instructions;
})();

module.exports = $root;
