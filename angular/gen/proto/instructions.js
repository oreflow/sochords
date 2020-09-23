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
         * @property {boolean|null} [breakLine] TabInstructionBlock breakLine
         * @property {string|null} [trailingText] TabInstructionBlock trailingText
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
         * TabInstructionBlock breakLine.
         * @member {boolean} breakLine
         * @memberof instructions.TabInstructionBlock
         * @instance
         */
        TabInstructionBlock.prototype.breakLine = false;

        /**
         * TabInstructionBlock trailingText.
         * @member {string} trailingText
         * @memberof instructions.TabInstructionBlock
         * @instance
         */
        TabInstructionBlock.prototype.trailingText = "";

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
            if (message.breakLine != null && message.hasOwnProperty("breakLine"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.breakLine);
            if (message.trailingText != null && message.hasOwnProperty("trailingText"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.trailingText);
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
                case 2:
                    message.breakLine = reader.bool();
                    break;
                case 3:
                    message.trailingText = reader.string();
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
            if (message.breakLine != null && message.hasOwnProperty("breakLine"))
                if (typeof message.breakLine !== "boolean")
                    return "breakLine: boolean expected";
            if (message.trailingText != null && message.hasOwnProperty("trailingText"))
                if (!$util.isString(message.trailingText))
                    return "trailingText: string expected";
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
            if (object.breakLine != null)
                message.breakLine = Boolean(object.breakLine);
            if (object.trailingText != null)
                message.trailingText = String(object.trailingText);
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
            if (options.defaults) {
                object.breakLine = false;
                object.trailingText = "";
            }
            if (message.picks && message.picks.length) {
                object.picks = [];
                for (var j = 0; j < message.picks.length; ++j)
                    object.picks[j] = $root.instructions.StringCombination.toObject(message.picks[j], options);
            }
            if (message.breakLine != null && message.hasOwnProperty("breakLine"))
                object.breakLine = message.breakLine;
            if (message.trailingText != null && message.hasOwnProperty("trailingText"))
                object.trailingText = message.trailingText;
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

    instructions.Chord = (function() {

        /**
         * Properties of a Chord.
         * @memberof instructions
         * @interface IChord
         * @property {string|null} [name] Chord name
         * @property {string|null} [guitarChordId] Chord guitarChordId
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
         * Chord name.
         * @member {string} name
         * @memberof instructions.Chord
         * @instance
         */
        Chord.prototype.name = "";

        /**
         * Chord guitarChordId.
         * @member {string} guitarChordId
         * @memberof instructions.Chord
         * @instance
         */
        Chord.prototype.guitarChordId = "";

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
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.guitarChordId != null && message.hasOwnProperty("guitarChordId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.guitarChordId);
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
                    message.name = reader.string();
                    break;
                case 2:
                    message.guitarChordId = reader.string();
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
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.guitarChordId != null && message.hasOwnProperty("guitarChordId"))
                if (!$util.isString(message.guitarChordId))
                    return "guitarChordId: string expected";
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
            if (object.name != null)
                message.name = String(object.name);
            if (object.guitarChordId != null)
                message.guitarChordId = String(object.guitarChordId);
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
                object.name = "";
                object.guitarChordId = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.guitarChordId != null && message.hasOwnProperty("guitarChordId"))
                object.guitarChordId = message.guitarChordId;
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
         * @property {string|null} [id] ChordInLyric id
         * @property {instructions.IChord|null} [chord] ChordInLyric chord
         * @property {number|null} [offset] ChordInLyric offset
         * @property {chords.ISongChord|null} [songChord] ChordInLyric songChord
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
         * ChordInLyric id.
         * @member {string} id
         * @memberof instructions.ChordInLyric
         * @instance
         */
        ChordInLyric.prototype.id = "";

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
         * ChordInLyric songChord.
         * @member {chords.ISongChord|null|undefined} songChord
         * @memberof instructions.ChordInLyric
         * @instance
         */
        ChordInLyric.prototype.songChord = null;

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
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.chord != null && message.hasOwnProperty("chord"))
                $root.instructions.Chord.encode(message.chord, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.offset != null && message.hasOwnProperty("offset"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.offset);
            if (message.songChord != null && message.hasOwnProperty("songChord"))
                $root.chords.SongChord.encode(message.songChord, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
                    message.id = reader.string();
                    break;
                case 2:
                    message.chord = $root.instructions.Chord.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.offset = reader.int32();
                    break;
                case 4:
                    message.songChord = $root.chords.SongChord.decode(reader, reader.uint32());
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
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.chord != null && message.hasOwnProperty("chord")) {
                var error = $root.instructions.Chord.verify(message.chord);
                if (error)
                    return "chord." + error;
            }
            if (message.offset != null && message.hasOwnProperty("offset"))
                if (!$util.isInteger(message.offset))
                    return "offset: integer expected";
            if (message.songChord != null && message.hasOwnProperty("songChord")) {
                var error = $root.chords.SongChord.verify(message.songChord);
                if (error)
                    return "songChord." + error;
            }
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
            if (object.id != null)
                message.id = String(object.id);
            if (object.chord != null) {
                if (typeof object.chord !== "object")
                    throw TypeError(".instructions.ChordInLyric.chord: object expected");
                message.chord = $root.instructions.Chord.fromObject(object.chord);
            }
            if (object.offset != null)
                message.offset = object.offset | 0;
            if (object.songChord != null) {
                if (typeof object.songChord !== "object")
                    throw TypeError(".instructions.ChordInLyric.songChord: object expected");
                message.songChord = $root.chords.SongChord.fromObject(object.songChord);
            }
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
                object.id = "";
                object.chord = null;
                object.offset = 0;
                object.songChord = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.chord != null && message.hasOwnProperty("chord"))
                object.chord = $root.instructions.Chord.toObject(message.chord, options);
            if (message.offset != null && message.hasOwnProperty("offset"))
                object.offset = message.offset;
            if (message.songChord != null && message.hasOwnProperty("songChord"))
                object.songChord = $root.chords.SongChord.toObject(message.songChord, options);
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
         * @property {string|null} [id] ChordsAndLyrics id
         * @property {string|null} [lyricLine] ChordsAndLyrics lyricLine
         * @property {Array.<instructions.IChordInLyric>|null} [chordsInLyric] ChordsAndLyrics chordsInLyric
         * @property {boolean|null} [breakLine] ChordsAndLyrics breakLine
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
         * ChordsAndLyrics id.
         * @member {string} id
         * @memberof instructions.ChordsAndLyrics
         * @instance
         */
        ChordsAndLyrics.prototype.id = "";

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
         * ChordsAndLyrics breakLine.
         * @member {boolean} breakLine
         * @memberof instructions.ChordsAndLyrics
         * @instance
         */
        ChordsAndLyrics.prototype.breakLine = false;

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
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.lyricLine != null && message.hasOwnProperty("lyricLine"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lyricLine);
            if (message.chordsInLyric != null && message.chordsInLyric.length)
                for (var i = 0; i < message.chordsInLyric.length; ++i)
                    $root.instructions.ChordInLyric.encode(message.chordsInLyric[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.breakLine != null && message.hasOwnProperty("breakLine"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.breakLine);
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
                    message.id = reader.string();
                    break;
                case 2:
                    message.lyricLine = reader.string();
                    break;
                case 3:
                    if (!(message.chordsInLyric && message.chordsInLyric.length))
                        message.chordsInLyric = [];
                    message.chordsInLyric.push($root.instructions.ChordInLyric.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.breakLine = reader.bool();
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
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
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
            if (message.breakLine != null && message.hasOwnProperty("breakLine"))
                if (typeof message.breakLine !== "boolean")
                    return "breakLine: boolean expected";
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
            if (object.id != null)
                message.id = String(object.id);
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
            if (object.breakLine != null)
                message.breakLine = Boolean(object.breakLine);
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
            if (options.defaults) {
                object.id = "";
                object.lyricLine = "";
                object.breakLine = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.lyricLine != null && message.hasOwnProperty("lyricLine"))
                object.lyricLine = message.lyricLine;
            if (message.chordsInLyric && message.chordsInLyric.length) {
                object.chordsInLyric = [];
                for (var j = 0; j < message.chordsInLyric.length; ++j)
                    object.chordsInLyric[j] = $root.instructions.ChordInLyric.toObject(message.chordsInLyric[j], options);
            }
            if (message.breakLine != null && message.hasOwnProperty("breakLine"))
                object.breakLine = message.breakLine;
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

    instructions.Strum = (function() {

        /**
         * Properties of a Strum.
         * @memberof instructions
         * @interface IStrum
         * @property {instructions.Strum.StrumDirection|null} [direction] Strum direction
         * @property {boolean|null} [isHighlighted] Strum isHighlighted
         */

        /**
         * Constructs a new Strum.
         * @memberof instructions
         * @classdesc Represents a Strum.
         * @implements IStrum
         * @constructor
         * @param {instructions.IStrum=} [properties] Properties to set
         */
        function Strum(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Strum direction.
         * @member {instructions.Strum.StrumDirection} direction
         * @memberof instructions.Strum
         * @instance
         */
        Strum.prototype.direction = 0;

        /**
         * Strum isHighlighted.
         * @member {boolean} isHighlighted
         * @memberof instructions.Strum
         * @instance
         */
        Strum.prototype.isHighlighted = false;

        /**
         * Creates a new Strum instance using the specified properties.
         * @function create
         * @memberof instructions.Strum
         * @static
         * @param {instructions.IStrum=} [properties] Properties to set
         * @returns {instructions.Strum} Strum instance
         */
        Strum.create = function create(properties) {
            return new Strum(properties);
        };

        /**
         * Encodes the specified Strum message. Does not implicitly {@link instructions.Strum.verify|verify} messages.
         * @function encode
         * @memberof instructions.Strum
         * @static
         * @param {instructions.IStrum} message Strum message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Strum.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.direction != null && message.hasOwnProperty("direction"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.direction);
            if (message.isHighlighted != null && message.hasOwnProperty("isHighlighted"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isHighlighted);
            return writer;
        };

        /**
         * Encodes the specified Strum message, length delimited. Does not implicitly {@link instructions.Strum.verify|verify} messages.
         * @function encodeDelimited
         * @memberof instructions.Strum
         * @static
         * @param {instructions.IStrum} message Strum message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Strum.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Strum message from the specified reader or buffer.
         * @function decode
         * @memberof instructions.Strum
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {instructions.Strum} Strum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Strum.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.instructions.Strum();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.direction = reader.int32();
                    break;
                case 2:
                    message.isHighlighted = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Strum message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof instructions.Strum
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {instructions.Strum} Strum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Strum.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Strum message.
         * @function verify
         * @memberof instructions.Strum
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Strum.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.direction != null && message.hasOwnProperty("direction"))
                switch (message.direction) {
                default:
                    return "direction: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.isHighlighted != null && message.hasOwnProperty("isHighlighted"))
                if (typeof message.isHighlighted !== "boolean")
                    return "isHighlighted: boolean expected";
            return null;
        };

        /**
         * Creates a Strum message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof instructions.Strum
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {instructions.Strum} Strum
         */
        Strum.fromObject = function fromObject(object) {
            if (object instanceof $root.instructions.Strum)
                return object;
            var message = new $root.instructions.Strum();
            switch (object.direction) {
            case "NO_STRUM":
            case 0:
                message.direction = 0;
                break;
            case "UP":
            case 1:
                message.direction = 1;
                break;
            case "DOWN":
            case 2:
                message.direction = 2;
                break;
            }
            if (object.isHighlighted != null)
                message.isHighlighted = Boolean(object.isHighlighted);
            return message;
        };

        /**
         * Creates a plain object from a Strum message. Also converts values to other types if specified.
         * @function toObject
         * @memberof instructions.Strum
         * @static
         * @param {instructions.Strum} message Strum
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Strum.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.direction = options.enums === String ? "NO_STRUM" : 0;
                object.isHighlighted = false;
            }
            if (message.direction != null && message.hasOwnProperty("direction"))
                object.direction = options.enums === String ? $root.instructions.Strum.StrumDirection[message.direction] : message.direction;
            if (message.isHighlighted != null && message.hasOwnProperty("isHighlighted"))
                object.isHighlighted = message.isHighlighted;
            return object;
        };

        /**
         * Converts this Strum to JSON.
         * @function toJSON
         * @memberof instructions.Strum
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Strum.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * StrumDirection enum.
         * @name instructions.Strum.StrumDirection
         * @enum {string}
         * @property {number} NO_STRUM=0 NO_STRUM value
         * @property {number} UP=1 UP value
         * @property {number} DOWN=2 DOWN value
         */
        Strum.StrumDirection = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NO_STRUM"] = 0;
            values[valuesById[1] = "UP"] = 1;
            values[valuesById[2] = "DOWN"] = 2;
            return values;
        })();

        return Strum;
    })();

    instructions.StrummingPattern = (function() {

        /**
         * Properties of a StrummingPattern.
         * @memberof instructions
         * @interface IStrummingPattern
         * @property {Array.<instructions.IStrum>|null} [strums] StrummingPattern strums
         */

        /**
         * Constructs a new StrummingPattern.
         * @memberof instructions
         * @classdesc Represents a StrummingPattern.
         * @implements IStrummingPattern
         * @constructor
         * @param {instructions.IStrummingPattern=} [properties] Properties to set
         */
        function StrummingPattern(properties) {
            this.strums = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StrummingPattern strums.
         * @member {Array.<instructions.IStrum>} strums
         * @memberof instructions.StrummingPattern
         * @instance
         */
        StrummingPattern.prototype.strums = $util.emptyArray;

        /**
         * Creates a new StrummingPattern instance using the specified properties.
         * @function create
         * @memberof instructions.StrummingPattern
         * @static
         * @param {instructions.IStrummingPattern=} [properties] Properties to set
         * @returns {instructions.StrummingPattern} StrummingPattern instance
         */
        StrummingPattern.create = function create(properties) {
            return new StrummingPattern(properties);
        };

        /**
         * Encodes the specified StrummingPattern message. Does not implicitly {@link instructions.StrummingPattern.verify|verify} messages.
         * @function encode
         * @memberof instructions.StrummingPattern
         * @static
         * @param {instructions.IStrummingPattern} message StrummingPattern message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrummingPattern.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.strums != null && message.strums.length)
                for (var i = 0; i < message.strums.length; ++i)
                    $root.instructions.Strum.encode(message.strums[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StrummingPattern message, length delimited. Does not implicitly {@link instructions.StrummingPattern.verify|verify} messages.
         * @function encodeDelimited
         * @memberof instructions.StrummingPattern
         * @static
         * @param {instructions.IStrummingPattern} message StrummingPattern message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StrummingPattern.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StrummingPattern message from the specified reader or buffer.
         * @function decode
         * @memberof instructions.StrummingPattern
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {instructions.StrummingPattern} StrummingPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrummingPattern.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.instructions.StrummingPattern();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.strums && message.strums.length))
                        message.strums = [];
                    message.strums.push($root.instructions.Strum.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StrummingPattern message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof instructions.StrummingPattern
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {instructions.StrummingPattern} StrummingPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StrummingPattern.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StrummingPattern message.
         * @function verify
         * @memberof instructions.StrummingPattern
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StrummingPattern.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.strums != null && message.hasOwnProperty("strums")) {
                if (!Array.isArray(message.strums))
                    return "strums: array expected";
                for (var i = 0; i < message.strums.length; ++i) {
                    var error = $root.instructions.Strum.verify(message.strums[i]);
                    if (error)
                        return "strums." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StrummingPattern message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof instructions.StrummingPattern
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {instructions.StrummingPattern} StrummingPattern
         */
        StrummingPattern.fromObject = function fromObject(object) {
            if (object instanceof $root.instructions.StrummingPattern)
                return object;
            var message = new $root.instructions.StrummingPattern();
            if (object.strums) {
                if (!Array.isArray(object.strums))
                    throw TypeError(".instructions.StrummingPattern.strums: array expected");
                message.strums = [];
                for (var i = 0; i < object.strums.length; ++i) {
                    if (typeof object.strums[i] !== "object")
                        throw TypeError(".instructions.StrummingPattern.strums: object expected");
                    message.strums[i] = $root.instructions.Strum.fromObject(object.strums[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a StrummingPattern message. Also converts values to other types if specified.
         * @function toObject
         * @memberof instructions.StrummingPattern
         * @static
         * @param {instructions.StrummingPattern} message StrummingPattern
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StrummingPattern.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.strums = [];
            if (message.strums && message.strums.length) {
                object.strums = [];
                for (var j = 0; j < message.strums.length; ++j)
                    object.strums[j] = $root.instructions.Strum.toObject(message.strums[j], options);
            }
            return object;
        };

        /**
         * Converts this StrummingPattern to JSON.
         * @function toJSON
         * @memberof instructions.StrummingPattern
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StrummingPattern.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StrummingPattern;
    })();

    instructions.ChordInstruction = (function() {

        /**
         * Properties of a ChordInstruction.
         * @memberof instructions
         * @interface IChordInstruction
         * @property {Array.<instructions.IChordsAndLyrics>|null} [chordsAndLyrics] ChordInstruction chordsAndLyrics
         * @property {Array.<instructions.IChord>|null} [chords] ChordInstruction chords
         * @property {instructions.IStrummingPattern|null} [strummingPattern] ChordInstruction strummingPattern
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
         * ChordInstruction strummingPattern.
         * @member {instructions.IStrummingPattern|null|undefined} strummingPattern
         * @memberof instructions.ChordInstruction
         * @instance
         */
        ChordInstruction.prototype.strummingPattern = null;

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
            if (message.strummingPattern != null && message.hasOwnProperty("strummingPattern"))
                $root.instructions.StrummingPattern.encode(message.strummingPattern, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                case 3:
                    message.strummingPattern = $root.instructions.StrummingPattern.decode(reader, reader.uint32());
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
            if (message.strummingPattern != null && message.hasOwnProperty("strummingPattern")) {
                var error = $root.instructions.StrummingPattern.verify(message.strummingPattern);
                if (error)
                    return "strummingPattern." + error;
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
            if (object.strummingPattern != null) {
                if (typeof object.strummingPattern !== "object")
                    throw TypeError(".instructions.ChordInstruction.strummingPattern: object expected");
                message.strummingPattern = $root.instructions.StrummingPattern.fromObject(object.strummingPattern);
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
            if (options.defaults)
                object.strummingPattern = null;
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
            if (message.strummingPattern != null && message.hasOwnProperty("strummingPattern"))
                object.strummingPattern = $root.instructions.StrummingPattern.toObject(message.strummingPattern, options);
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

$root.chords = (function() {

    /**
     * Namespace chords.
     * @exports chords
     * @namespace
     */
    var chords = {};

    chords.ChordPattern = (function() {

        /**
         * Properties of a ChordPattern.
         * @memberof chords
         * @interface IChordPattern
         * @property {string|null} [e4] ChordPattern e4
         * @property {string|null} [b] ChordPattern b
         * @property {string|null} [g] ChordPattern g
         * @property {string|null} [d] ChordPattern d
         * @property {string|null} [a] ChordPattern a
         * @property {string|null} [e2] ChordPattern e2
         */

        /**
         * Constructs a new ChordPattern.
         * @memberof chords
         * @classdesc Represents a ChordPattern.
         * @implements IChordPattern
         * @constructor
         * @param {chords.IChordPattern=} [properties] Properties to set
         */
        function ChordPattern(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChordPattern e4.
         * @member {string} e4
         * @memberof chords.ChordPattern
         * @instance
         */
        ChordPattern.prototype.e4 = "";

        /**
         * ChordPattern b.
         * @member {string} b
         * @memberof chords.ChordPattern
         * @instance
         */
        ChordPattern.prototype.b = "";

        /**
         * ChordPattern g.
         * @member {string} g
         * @memberof chords.ChordPattern
         * @instance
         */
        ChordPattern.prototype.g = "";

        /**
         * ChordPattern d.
         * @member {string} d
         * @memberof chords.ChordPattern
         * @instance
         */
        ChordPattern.prototype.d = "";

        /**
         * ChordPattern a.
         * @member {string} a
         * @memberof chords.ChordPattern
         * @instance
         */
        ChordPattern.prototype.a = "";

        /**
         * ChordPattern e2.
         * @member {string} e2
         * @memberof chords.ChordPattern
         * @instance
         */
        ChordPattern.prototype.e2 = "";

        /**
         * Creates a new ChordPattern instance using the specified properties.
         * @function create
         * @memberof chords.ChordPattern
         * @static
         * @param {chords.IChordPattern=} [properties] Properties to set
         * @returns {chords.ChordPattern} ChordPattern instance
         */
        ChordPattern.create = function create(properties) {
            return new ChordPattern(properties);
        };

        /**
         * Encodes the specified ChordPattern message. Does not implicitly {@link chords.ChordPattern.verify|verify} messages.
         * @function encode
         * @memberof chords.ChordPattern
         * @static
         * @param {chords.IChordPattern} message ChordPattern message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordPattern.encode = function encode(message, writer) {
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
            return writer;
        };

        /**
         * Encodes the specified ChordPattern message, length delimited. Does not implicitly {@link chords.ChordPattern.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chords.ChordPattern
         * @static
         * @param {chords.IChordPattern} message ChordPattern message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordPattern.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChordPattern message from the specified reader or buffer.
         * @function decode
         * @memberof chords.ChordPattern
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chords.ChordPattern} ChordPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordPattern.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chords.ChordPattern();
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
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChordPattern message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chords.ChordPattern
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chords.ChordPattern} ChordPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordPattern.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChordPattern message.
         * @function verify
         * @memberof chords.ChordPattern
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChordPattern.verify = function verify(message) {
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
            return null;
        };

        /**
         * Creates a ChordPattern message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chords.ChordPattern
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chords.ChordPattern} ChordPattern
         */
        ChordPattern.fromObject = function fromObject(object) {
            if (object instanceof $root.chords.ChordPattern)
                return object;
            var message = new $root.chords.ChordPattern();
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
            return message;
        };

        /**
         * Creates a plain object from a ChordPattern message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chords.ChordPattern
         * @static
         * @param {chords.ChordPattern} message ChordPattern
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChordPattern.toObject = function toObject(message, options) {
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
            return object;
        };

        /**
         * Converts this ChordPattern to JSON.
         * @function toJSON
         * @memberof chords.ChordPattern
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChordPattern.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChordPattern;
    })();

    chords.GuitarChord = (function() {

        /**
         * Properties of a GuitarChord.
         * @memberof chords
         * @interface IGuitarChord
         * @property {string|null} [id] GuitarChord id
         * @property {string|null} [name] GuitarChord name
         * @property {number|null} [complexity] GuitarChord complexity
         * @property {chords.IChordPattern|null} [chordPattern] GuitarChord chordPattern
         * @property {number|null} [complexityRank] GuitarChord complexityRank
         */

        /**
         * Constructs a new GuitarChord.
         * @memberof chords
         * @classdesc Represents a GuitarChord.
         * @implements IGuitarChord
         * @constructor
         * @param {chords.IGuitarChord=} [properties] Properties to set
         */
        function GuitarChord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuitarChord id.
         * @member {string} id
         * @memberof chords.GuitarChord
         * @instance
         */
        GuitarChord.prototype.id = "";

        /**
         * GuitarChord name.
         * @member {string} name
         * @memberof chords.GuitarChord
         * @instance
         */
        GuitarChord.prototype.name = "";

        /**
         * GuitarChord complexity.
         * @member {number} complexity
         * @memberof chords.GuitarChord
         * @instance
         */
        GuitarChord.prototype.complexity = 0;

        /**
         * GuitarChord chordPattern.
         * @member {chords.IChordPattern|null|undefined} chordPattern
         * @memberof chords.GuitarChord
         * @instance
         */
        GuitarChord.prototype.chordPattern = null;

        /**
         * GuitarChord complexityRank.
         * @member {number} complexityRank
         * @memberof chords.GuitarChord
         * @instance
         */
        GuitarChord.prototype.complexityRank = 0;

        /**
         * Creates a new GuitarChord instance using the specified properties.
         * @function create
         * @memberof chords.GuitarChord
         * @static
         * @param {chords.IGuitarChord=} [properties] Properties to set
         * @returns {chords.GuitarChord} GuitarChord instance
         */
        GuitarChord.create = function create(properties) {
            return new GuitarChord(properties);
        };

        /**
         * Encodes the specified GuitarChord message. Does not implicitly {@link chords.GuitarChord.verify|verify} messages.
         * @function encode
         * @memberof chords.GuitarChord
         * @static
         * @param {chords.IGuitarChord} message GuitarChord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuitarChord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.complexity != null && message.hasOwnProperty("complexity"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.complexity);
            if (message.chordPattern != null && message.hasOwnProperty("chordPattern"))
                $root.chords.ChordPattern.encode(message.chordPattern, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.complexityRank != null && message.hasOwnProperty("complexityRank"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.complexityRank);
            return writer;
        };

        /**
         * Encodes the specified GuitarChord message, length delimited. Does not implicitly {@link chords.GuitarChord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chords.GuitarChord
         * @static
         * @param {chords.IGuitarChord} message GuitarChord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuitarChord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuitarChord message from the specified reader or buffer.
         * @function decode
         * @memberof chords.GuitarChord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chords.GuitarChord} GuitarChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuitarChord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chords.GuitarChord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.complexity = reader.float();
                    break;
                case 4:
                    message.chordPattern = $root.chords.ChordPattern.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.complexityRank = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GuitarChord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chords.GuitarChord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chords.GuitarChord} GuitarChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuitarChord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuitarChord message.
         * @function verify
         * @memberof chords.GuitarChord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuitarChord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.complexity != null && message.hasOwnProperty("complexity"))
                if (typeof message.complexity !== "number")
                    return "complexity: number expected";
            if (message.chordPattern != null && message.hasOwnProperty("chordPattern")) {
                var error = $root.chords.ChordPattern.verify(message.chordPattern);
                if (error)
                    return "chordPattern." + error;
            }
            if (message.complexityRank != null && message.hasOwnProperty("complexityRank"))
                if (!$util.isInteger(message.complexityRank))
                    return "complexityRank: integer expected";
            return null;
        };

        /**
         * Creates a GuitarChord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chords.GuitarChord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chords.GuitarChord} GuitarChord
         */
        GuitarChord.fromObject = function fromObject(object) {
            if (object instanceof $root.chords.GuitarChord)
                return object;
            var message = new $root.chords.GuitarChord();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.complexity != null)
                message.complexity = Number(object.complexity);
            if (object.chordPattern != null) {
                if (typeof object.chordPattern !== "object")
                    throw TypeError(".chords.GuitarChord.chordPattern: object expected");
                message.chordPattern = $root.chords.ChordPattern.fromObject(object.chordPattern);
            }
            if (object.complexityRank != null)
                message.complexityRank = object.complexityRank | 0;
            return message;
        };

        /**
         * Creates a plain object from a GuitarChord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chords.GuitarChord
         * @static
         * @param {chords.GuitarChord} message GuitarChord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuitarChord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.complexity = 0;
                object.chordPattern = null;
                object.complexityRank = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.complexity != null && message.hasOwnProperty("complexity"))
                object.complexity = options.json && !isFinite(message.complexity) ? String(message.complexity) : message.complexity;
            if (message.chordPattern != null && message.hasOwnProperty("chordPattern"))
                object.chordPattern = $root.chords.ChordPattern.toObject(message.chordPattern, options);
            if (message.complexityRank != null && message.hasOwnProperty("complexityRank"))
                object.complexityRank = message.complexityRank;
            return object;
        };

        /**
         * Converts this GuitarChord to JSON.
         * @function toJSON
         * @memberof chords.GuitarChord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuitarChord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GuitarChord;
    })();

    chords.GuitarChords = (function() {

        /**
         * Properties of a GuitarChords.
         * @memberof chords
         * @interface IGuitarChords
         * @property {Array.<chords.IGuitarChord>|null} [chords] GuitarChords chords
         */

        /**
         * Constructs a new GuitarChords.
         * @memberof chords
         * @classdesc Represents a GuitarChords.
         * @implements IGuitarChords
         * @constructor
         * @param {chords.IGuitarChords=} [properties] Properties to set
         */
        function GuitarChords(properties) {
            this.chords = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuitarChords chords.
         * @member {Array.<chords.IGuitarChord>} chords
         * @memberof chords.GuitarChords
         * @instance
         */
        GuitarChords.prototype.chords = $util.emptyArray;

        /**
         * Creates a new GuitarChords instance using the specified properties.
         * @function create
         * @memberof chords.GuitarChords
         * @static
         * @param {chords.IGuitarChords=} [properties] Properties to set
         * @returns {chords.GuitarChords} GuitarChords instance
         */
        GuitarChords.create = function create(properties) {
            return new GuitarChords(properties);
        };

        /**
         * Encodes the specified GuitarChords message. Does not implicitly {@link chords.GuitarChords.verify|verify} messages.
         * @function encode
         * @memberof chords.GuitarChords
         * @static
         * @param {chords.IGuitarChords} message GuitarChords message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuitarChords.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chords != null && message.chords.length)
                for (var i = 0; i < message.chords.length; ++i)
                    $root.chords.GuitarChord.encode(message.chords[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GuitarChords message, length delimited. Does not implicitly {@link chords.GuitarChords.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chords.GuitarChords
         * @static
         * @param {chords.IGuitarChords} message GuitarChords message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuitarChords.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuitarChords message from the specified reader or buffer.
         * @function decode
         * @memberof chords.GuitarChords
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chords.GuitarChords} GuitarChords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuitarChords.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chords.GuitarChords();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.chords && message.chords.length))
                        message.chords = [];
                    message.chords.push($root.chords.GuitarChord.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GuitarChords message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chords.GuitarChords
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chords.GuitarChords} GuitarChords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuitarChords.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuitarChords message.
         * @function verify
         * @memberof chords.GuitarChords
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuitarChords.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chords != null && message.hasOwnProperty("chords")) {
                if (!Array.isArray(message.chords))
                    return "chords: array expected";
                for (var i = 0; i < message.chords.length; ++i) {
                    var error = $root.chords.GuitarChord.verify(message.chords[i]);
                    if (error)
                        return "chords." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GuitarChords message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chords.GuitarChords
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chords.GuitarChords} GuitarChords
         */
        GuitarChords.fromObject = function fromObject(object) {
            if (object instanceof $root.chords.GuitarChords)
                return object;
            var message = new $root.chords.GuitarChords();
            if (object.chords) {
                if (!Array.isArray(object.chords))
                    throw TypeError(".chords.GuitarChords.chords: array expected");
                message.chords = [];
                for (var i = 0; i < object.chords.length; ++i) {
                    if (typeof object.chords[i] !== "object")
                        throw TypeError(".chords.GuitarChords.chords: object expected");
                    message.chords[i] = $root.chords.GuitarChord.fromObject(object.chords[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GuitarChords message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chords.GuitarChords
         * @static
         * @param {chords.GuitarChords} message GuitarChords
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuitarChords.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.chords = [];
            if (message.chords && message.chords.length) {
                object.chords = [];
                for (var j = 0; j < message.chords.length; ++j)
                    object.chords[j] = $root.chords.GuitarChord.toObject(message.chords[j], options);
            }
            return object;
        };

        /**
         * Converts this GuitarChords to JSON.
         * @function toJSON
         * @memberof chords.GuitarChords
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuitarChords.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GuitarChords;
    })();

    chords.SongChord = (function() {

        /**
         * Properties of a SongChord.
         * @memberof chords
         * @interface ISongChord
         * @property {string|null} [id] SongChord id
         * @property {string|null} [name] SongChord name
         * @property {chords.IGuitarChord|null} [guitarChord] SongChord guitarChord
         */

        /**
         * Constructs a new SongChord.
         * @memberof chords
         * @classdesc Represents a SongChord.
         * @implements ISongChord
         * @constructor
         * @param {chords.ISongChord=} [properties] Properties to set
         */
        function SongChord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SongChord id.
         * @member {string} id
         * @memberof chords.SongChord
         * @instance
         */
        SongChord.prototype.id = "";

        /**
         * SongChord name.
         * @member {string} name
         * @memberof chords.SongChord
         * @instance
         */
        SongChord.prototype.name = "";

        /**
         * SongChord guitarChord.
         * @member {chords.IGuitarChord|null|undefined} guitarChord
         * @memberof chords.SongChord
         * @instance
         */
        SongChord.prototype.guitarChord = null;

        /**
         * Creates a new SongChord instance using the specified properties.
         * @function create
         * @memberof chords.SongChord
         * @static
         * @param {chords.ISongChord=} [properties] Properties to set
         * @returns {chords.SongChord} SongChord instance
         */
        SongChord.create = function create(properties) {
            return new SongChord(properties);
        };

        /**
         * Encodes the specified SongChord message. Does not implicitly {@link chords.SongChord.verify|verify} messages.
         * @function encode
         * @memberof chords.SongChord
         * @static
         * @param {chords.ISongChord} message SongChord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SongChord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.guitarChord != null && message.hasOwnProperty("guitarChord"))
                $root.chords.GuitarChord.encode(message.guitarChord, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SongChord message, length delimited. Does not implicitly {@link chords.SongChord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chords.SongChord
         * @static
         * @param {chords.ISongChord} message SongChord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SongChord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SongChord message from the specified reader or buffer.
         * @function decode
         * @memberof chords.SongChord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chords.SongChord} SongChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SongChord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.chords.SongChord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.guitarChord = $root.chords.GuitarChord.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SongChord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chords.SongChord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chords.SongChord} SongChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SongChord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SongChord message.
         * @function verify
         * @memberof chords.SongChord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SongChord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.guitarChord != null && message.hasOwnProperty("guitarChord")) {
                var error = $root.chords.GuitarChord.verify(message.guitarChord);
                if (error)
                    return "guitarChord." + error;
            }
            return null;
        };

        /**
         * Creates a SongChord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chords.SongChord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chords.SongChord} SongChord
         */
        SongChord.fromObject = function fromObject(object) {
            if (object instanceof $root.chords.SongChord)
                return object;
            var message = new $root.chords.SongChord();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.guitarChord != null) {
                if (typeof object.guitarChord !== "object")
                    throw TypeError(".chords.SongChord.guitarChord: object expected");
                message.guitarChord = $root.chords.GuitarChord.fromObject(object.guitarChord);
            }
            return message;
        };

        /**
         * Creates a plain object from a SongChord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chords.SongChord
         * @static
         * @param {chords.SongChord} message SongChord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SongChord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.guitarChord = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.guitarChord != null && message.hasOwnProperty("guitarChord"))
                object.guitarChord = $root.chords.GuitarChord.toObject(message.guitarChord, options);
            return object;
        };

        /**
         * Converts this SongChord to JSON.
         * @function toJSON
         * @memberof chords.SongChord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SongChord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SongChord;
    })();

    return chords;
})();

module.exports = $root;
