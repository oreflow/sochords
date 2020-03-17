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

    instructions.ChordInstruction = (function() {

        /**
         * Properties of a ChordInstruction.
         * @memberof instructions
         * @interface IChordInstruction
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
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

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
            return new $root.instructions.ChordInstruction();
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
        ChordInstruction.toObject = function toObject() {
            return {};
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
