/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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

    return chords;
})();

module.exports = $root;
