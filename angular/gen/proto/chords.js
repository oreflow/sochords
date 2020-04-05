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

    chords.GuitarChord = (function() {

        /**
         * Properties of a GuitarChord.
         * @memberof chords
         * @interface IGuitarChord
         * @property {Array.<number>|null} [frets] GuitarChord frets
         * @property {boolean|null} [hasMutedStrings] GuitarChord hasMutedStrings
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
            this.frets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuitarChord frets.
         * @member {Array.<number>} frets
         * @memberof chords.GuitarChord
         * @instance
         */
        GuitarChord.prototype.frets = $util.emptyArray;

        /**
         * GuitarChord hasMutedStrings.
         * @member {boolean} hasMutedStrings
         * @memberof chords.GuitarChord
         * @instance
         */
        GuitarChord.prototype.hasMutedStrings = false;

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
            if (message.frets != null && message.frets.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.frets.length; ++i)
                    writer.int32(message.frets[i]);
                writer.ldelim();
            }
            if (message.hasMutedStrings != null && message.hasOwnProperty("hasMutedStrings"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasMutedStrings);
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
                    if (!(message.frets && message.frets.length))
                        message.frets = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.frets.push(reader.int32());
                    } else
                        message.frets.push(reader.int32());
                    break;
                case 2:
                    message.hasMutedStrings = reader.bool();
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
            if (message.frets != null && message.hasOwnProperty("frets")) {
                if (!Array.isArray(message.frets))
                    return "frets: array expected";
                for (var i = 0; i < message.frets.length; ++i)
                    if (!$util.isInteger(message.frets[i]))
                        return "frets: integer[] expected";
            }
            if (message.hasMutedStrings != null && message.hasOwnProperty("hasMutedStrings"))
                if (typeof message.hasMutedStrings !== "boolean")
                    return "hasMutedStrings: boolean expected";
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
            if (object.frets) {
                if (!Array.isArray(object.frets))
                    throw TypeError(".chords.GuitarChord.frets: array expected");
                message.frets = [];
                for (var i = 0; i < object.frets.length; ++i)
                    message.frets[i] = object.frets[i] | 0;
            }
            if (object.hasMutedStrings != null)
                message.hasMutedStrings = Boolean(object.hasMutedStrings);
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
            if (options.arrays || options.defaults)
                object.frets = [];
            if (options.defaults)
                object.hasMutedStrings = false;
            if (message.frets && message.frets.length) {
                object.frets = [];
                for (var j = 0; j < message.frets.length; ++j)
                    object.frets[j] = message.frets[j];
            }
            if (message.hasMutedStrings != null && message.hasOwnProperty("hasMutedStrings"))
                object.hasMutedStrings = message.hasMutedStrings;
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

    return chords;
})();

module.exports = $root;
