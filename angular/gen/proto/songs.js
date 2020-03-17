/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.songs = (function() {

    /**
     * Namespace songs.
     * @exports songs
     * @namespace
     */
    var songs = {};

    songs.ArtistInfo = (function() {

        /**
         * Properties of an ArtistInfo.
         * @memberof songs
         * @interface IArtistInfo
         * @property {string|null} [name] ArtistInfo name
         */

        /**
         * Constructs a new ArtistInfo.
         * @memberof songs
         * @classdesc Represents an ArtistInfo.
         * @implements IArtistInfo
         * @constructor
         * @param {songs.IArtistInfo=} [properties] Properties to set
         */
        function ArtistInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ArtistInfo name.
         * @member {string} name
         * @memberof songs.ArtistInfo
         * @instance
         */
        ArtistInfo.prototype.name = "";

        /**
         * Creates a new ArtistInfo instance using the specified properties.
         * @function create
         * @memberof songs.ArtistInfo
         * @static
         * @param {songs.IArtistInfo=} [properties] Properties to set
         * @returns {songs.ArtistInfo} ArtistInfo instance
         */
        ArtistInfo.create = function create(properties) {
            return new ArtistInfo(properties);
        };

        /**
         * Encodes the specified ArtistInfo message. Does not implicitly {@link songs.ArtistInfo.verify|verify} messages.
         * @function encode
         * @memberof songs.ArtistInfo
         * @static
         * @param {songs.IArtistInfo} message ArtistInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArtistInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified ArtistInfo message, length delimited. Does not implicitly {@link songs.ArtistInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.ArtistInfo
         * @static
         * @param {songs.IArtistInfo} message ArtistInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ArtistInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ArtistInfo message from the specified reader or buffer.
         * @function decode
         * @memberof songs.ArtistInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.ArtistInfo} ArtistInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArtistInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.ArtistInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
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
         * Decodes an ArtistInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.ArtistInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.ArtistInfo} ArtistInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ArtistInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ArtistInfo message.
         * @function verify
         * @memberof songs.ArtistInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ArtistInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates an ArtistInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.ArtistInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.ArtistInfo} ArtistInfo
         */
        ArtistInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.ArtistInfo)
                return object;
            var message = new $root.songs.ArtistInfo();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from an ArtistInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.ArtistInfo
         * @static
         * @param {songs.ArtistInfo} message ArtistInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ArtistInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this ArtistInfo to JSON.
         * @function toJSON
         * @memberof songs.ArtistInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ArtistInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ArtistInfo;
    })();

    songs.SongInfo = (function() {

        /**
         * Properties of a SongInfo.
         * @memberof songs
         * @interface ISongInfo
         * @property {string|null} [title] SongInfo title
         * @property {Array.<songs.IArtistInfo>|null} [artists] SongInfo artists
         * @property {number|null} [latestUpdateMillis] SongInfo latestUpdateMillis
         */

        /**
         * Constructs a new SongInfo.
         * @memberof songs
         * @classdesc Represents a SongInfo.
         * @implements ISongInfo
         * @constructor
         * @param {songs.ISongInfo=} [properties] Properties to set
         */
        function SongInfo(properties) {
            this.artists = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SongInfo title.
         * @member {string} title
         * @memberof songs.SongInfo
         * @instance
         */
        SongInfo.prototype.title = "";

        /**
         * SongInfo artists.
         * @member {Array.<songs.IArtistInfo>} artists
         * @memberof songs.SongInfo
         * @instance
         */
        SongInfo.prototype.artists = $util.emptyArray;

        /**
         * SongInfo latestUpdateMillis.
         * @member {number} latestUpdateMillis
         * @memberof songs.SongInfo
         * @instance
         */
        SongInfo.prototype.latestUpdateMillis = 0;

        /**
         * Creates a new SongInfo instance using the specified properties.
         * @function create
         * @memberof songs.SongInfo
         * @static
         * @param {songs.ISongInfo=} [properties] Properties to set
         * @returns {songs.SongInfo} SongInfo instance
         */
        SongInfo.create = function create(properties) {
            return new SongInfo(properties);
        };

        /**
         * Encodes the specified SongInfo message. Does not implicitly {@link songs.SongInfo.verify|verify} messages.
         * @function encode
         * @memberof songs.SongInfo
         * @static
         * @param {songs.ISongInfo} message SongInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SongInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.title != null && message.hasOwnProperty("title"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
            if (message.artists != null && message.artists.length)
                for (var i = 0; i < message.artists.length; ++i)
                    $root.songs.ArtistInfo.encode(message.artists[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.latestUpdateMillis != null && message.hasOwnProperty("latestUpdateMillis"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.latestUpdateMillis);
            return writer;
        };

        /**
         * Encodes the specified SongInfo message, length delimited. Does not implicitly {@link songs.SongInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.SongInfo
         * @static
         * @param {songs.ISongInfo} message SongInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SongInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SongInfo message from the specified reader or buffer.
         * @function decode
         * @memberof songs.SongInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.SongInfo} SongInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SongInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.SongInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    if (!(message.artists && message.artists.length))
                        message.artists = [];
                    message.artists.push($root.songs.ArtistInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.latestUpdateMillis = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SongInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.SongInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.SongInfo} SongInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SongInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SongInfo message.
         * @function verify
         * @memberof songs.SongInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SongInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.title != null && message.hasOwnProperty("title"))
                if (!$util.isString(message.title))
                    return "title: string expected";
            if (message.artists != null && message.hasOwnProperty("artists")) {
                if (!Array.isArray(message.artists))
                    return "artists: array expected";
                for (var i = 0; i < message.artists.length; ++i) {
                    var error = $root.songs.ArtistInfo.verify(message.artists[i]);
                    if (error)
                        return "artists." + error;
                }
            }
            if (message.latestUpdateMillis != null && message.hasOwnProperty("latestUpdateMillis"))
                if (!$util.isInteger(message.latestUpdateMillis))
                    return "latestUpdateMillis: integer expected";
            return null;
        };

        /**
         * Creates a SongInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.SongInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.SongInfo} SongInfo
         */
        SongInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.SongInfo)
                return object;
            var message = new $root.songs.SongInfo();
            if (object.title != null)
                message.title = String(object.title);
            if (object.artists) {
                if (!Array.isArray(object.artists))
                    throw TypeError(".songs.SongInfo.artists: array expected");
                message.artists = [];
                for (var i = 0; i < object.artists.length; ++i) {
                    if (typeof object.artists[i] !== "object")
                        throw TypeError(".songs.SongInfo.artists: object expected");
                    message.artists[i] = $root.songs.ArtistInfo.fromObject(object.artists[i]);
                }
            }
            if (object.latestUpdateMillis != null)
                message.latestUpdateMillis = object.latestUpdateMillis | 0;
            return message;
        };

        /**
         * Creates a plain object from a SongInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.SongInfo
         * @static
         * @param {songs.SongInfo} message SongInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SongInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.artists = [];
            if (options.defaults) {
                object.title = "";
                object.latestUpdateMillis = 0;
            }
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.artists && message.artists.length) {
                object.artists = [];
                for (var j = 0; j < message.artists.length; ++j)
                    object.artists[j] = $root.songs.ArtistInfo.toObject(message.artists[j], options);
            }
            if (message.latestUpdateMillis != null && message.hasOwnProperty("latestUpdateMillis"))
                object.latestUpdateMillis = message.latestUpdateMillis;
            return object;
        };

        /**
         * Converts this SongInfo to JSON.
         * @function toJSON
         * @memberof songs.SongInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SongInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SongInfo;
    })();

    songs.SongSearchResult = (function() {

        /**
         * Properties of a SongSearchResult.
         * @memberof songs
         * @interface ISongSearchResult
         * @property {string|null} [id] SongSearchResult id
         * @property {songs.ISongInfo|null} [songInfo] SongSearchResult songInfo
         */

        /**
         * Constructs a new SongSearchResult.
         * @memberof songs
         * @classdesc Represents a SongSearchResult.
         * @implements ISongSearchResult
         * @constructor
         * @param {songs.ISongSearchResult=} [properties] Properties to set
         */
        function SongSearchResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SongSearchResult id.
         * @member {string} id
         * @memberof songs.SongSearchResult
         * @instance
         */
        SongSearchResult.prototype.id = "";

        /**
         * SongSearchResult songInfo.
         * @member {songs.ISongInfo|null|undefined} songInfo
         * @memberof songs.SongSearchResult
         * @instance
         */
        SongSearchResult.prototype.songInfo = null;

        /**
         * Creates a new SongSearchResult instance using the specified properties.
         * @function create
         * @memberof songs.SongSearchResult
         * @static
         * @param {songs.ISongSearchResult=} [properties] Properties to set
         * @returns {songs.SongSearchResult} SongSearchResult instance
         */
        SongSearchResult.create = function create(properties) {
            return new SongSearchResult(properties);
        };

        /**
         * Encodes the specified SongSearchResult message. Does not implicitly {@link songs.SongSearchResult.verify|verify} messages.
         * @function encode
         * @memberof songs.SongSearchResult
         * @static
         * @param {songs.ISongSearchResult} message SongSearchResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SongSearchResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.songInfo != null && message.hasOwnProperty("songInfo"))
                $root.songs.SongInfo.encode(message.songInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SongSearchResult message, length delimited. Does not implicitly {@link songs.SongSearchResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.SongSearchResult
         * @static
         * @param {songs.ISongSearchResult} message SongSearchResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SongSearchResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SongSearchResult message from the specified reader or buffer.
         * @function decode
         * @memberof songs.SongSearchResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.SongSearchResult} SongSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SongSearchResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.SongSearchResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.songInfo = $root.songs.SongInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SongSearchResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.SongSearchResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.SongSearchResult} SongSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SongSearchResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SongSearchResult message.
         * @function verify
         * @memberof songs.SongSearchResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SongSearchResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.songInfo != null && message.hasOwnProperty("songInfo")) {
                var error = $root.songs.SongInfo.verify(message.songInfo);
                if (error)
                    return "songInfo." + error;
            }
            return null;
        };

        /**
         * Creates a SongSearchResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.SongSearchResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.SongSearchResult} SongSearchResult
         */
        SongSearchResult.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.SongSearchResult)
                return object;
            var message = new $root.songs.SongSearchResult();
            if (object.id != null)
                message.id = String(object.id);
            if (object.songInfo != null) {
                if (typeof object.songInfo !== "object")
                    throw TypeError(".songs.SongSearchResult.songInfo: object expected");
                message.songInfo = $root.songs.SongInfo.fromObject(object.songInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a SongSearchResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.SongSearchResult
         * @static
         * @param {songs.SongSearchResult} message SongSearchResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SongSearchResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.songInfo = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.songInfo != null && message.hasOwnProperty("songInfo"))
                object.songInfo = $root.songs.SongInfo.toObject(message.songInfo, options);
            return object;
        };

        /**
         * Converts this SongSearchResult to JSON.
         * @function toJSON
         * @memberof songs.SongSearchResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SongSearchResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SongSearchResult;
    })();

    songs.Vocal = (function() {

        /**
         * Properties of a Vocal.
         * @memberof songs
         * @interface IVocal
         * @property {Array.<string>|null} [lines] Vocal lines
         */

        /**
         * Constructs a new Vocal.
         * @memberof songs
         * @classdesc Represents a Vocal.
         * @implements IVocal
         * @constructor
         * @param {songs.IVocal=} [properties] Properties to set
         */
        function Vocal(properties) {
            this.lines = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vocal lines.
         * @member {Array.<string>} lines
         * @memberof songs.Vocal
         * @instance
         */
        Vocal.prototype.lines = $util.emptyArray;

        /**
         * Creates a new Vocal instance using the specified properties.
         * @function create
         * @memberof songs.Vocal
         * @static
         * @param {songs.IVocal=} [properties] Properties to set
         * @returns {songs.Vocal} Vocal instance
         */
        Vocal.create = function create(properties) {
            return new Vocal(properties);
        };

        /**
         * Encodes the specified Vocal message. Does not implicitly {@link songs.Vocal.verify|verify} messages.
         * @function encode
         * @memberof songs.Vocal
         * @static
         * @param {songs.IVocal} message Vocal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vocal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lines != null && message.lines.length)
                for (var i = 0; i < message.lines.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.lines[i]);
            return writer;
        };

        /**
         * Encodes the specified Vocal message, length delimited. Does not implicitly {@link songs.Vocal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.Vocal
         * @static
         * @param {songs.IVocal} message Vocal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vocal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Vocal message from the specified reader or buffer.
         * @function decode
         * @memberof songs.Vocal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.Vocal} Vocal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vocal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.Vocal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.lines && message.lines.length))
                        message.lines = [];
                    message.lines.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Vocal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.Vocal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.Vocal} Vocal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vocal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Vocal message.
         * @function verify
         * @memberof songs.Vocal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vocal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lines != null && message.hasOwnProperty("lines")) {
                if (!Array.isArray(message.lines))
                    return "lines: array expected";
                for (var i = 0; i < message.lines.length; ++i)
                    if (!$util.isString(message.lines[i]))
                        return "lines: string[] expected";
            }
            return null;
        };

        /**
         * Creates a Vocal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.Vocal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.Vocal} Vocal
         */
        Vocal.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.Vocal)
                return object;
            var message = new $root.songs.Vocal();
            if (object.lines) {
                if (!Array.isArray(object.lines))
                    throw TypeError(".songs.Vocal.lines: array expected");
                message.lines = [];
                for (var i = 0; i < object.lines.length; ++i)
                    message.lines[i] = String(object.lines[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a Vocal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.Vocal
         * @static
         * @param {songs.Vocal} message Vocal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vocal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.lines = [];
            if (message.lines && message.lines.length) {
                object.lines = [];
                for (var j = 0; j < message.lines.length; ++j)
                    object.lines[j] = message.lines[j];
            }
            return object;
        };

        /**
         * Converts this Vocal to JSON.
         * @function toJSON
         * @memberof songs.Vocal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vocal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Vocal;
    })();

    songs.SongSectionInfo = (function() {

        /**
         * Properties of a SongSectionInfo.
         * @memberof songs
         * @interface ISongSectionInfo
         * @property {string|null} [sectionName] SongSectionInfo sectionName
         */

        /**
         * Constructs a new SongSectionInfo.
         * @memberof songs
         * @classdesc Represents a SongSectionInfo.
         * @implements ISongSectionInfo
         * @constructor
         * @param {songs.ISongSectionInfo=} [properties] Properties to set
         */
        function SongSectionInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SongSectionInfo sectionName.
         * @member {string} sectionName
         * @memberof songs.SongSectionInfo
         * @instance
         */
        SongSectionInfo.prototype.sectionName = "";

        /**
         * Creates a new SongSectionInfo instance using the specified properties.
         * @function create
         * @memberof songs.SongSectionInfo
         * @static
         * @param {songs.ISongSectionInfo=} [properties] Properties to set
         * @returns {songs.SongSectionInfo} SongSectionInfo instance
         */
        SongSectionInfo.create = function create(properties) {
            return new SongSectionInfo(properties);
        };

        /**
         * Encodes the specified SongSectionInfo message. Does not implicitly {@link songs.SongSectionInfo.verify|verify} messages.
         * @function encode
         * @memberof songs.SongSectionInfo
         * @static
         * @param {songs.ISongSectionInfo} message SongSectionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SongSectionInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sectionName != null && message.hasOwnProperty("sectionName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.sectionName);
            return writer;
        };

        /**
         * Encodes the specified SongSectionInfo message, length delimited. Does not implicitly {@link songs.SongSectionInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.SongSectionInfo
         * @static
         * @param {songs.ISongSectionInfo} message SongSectionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SongSectionInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SongSectionInfo message from the specified reader or buffer.
         * @function decode
         * @memberof songs.SongSectionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.SongSectionInfo} SongSectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SongSectionInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.SongSectionInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.sectionName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SongSectionInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.SongSectionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.SongSectionInfo} SongSectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SongSectionInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SongSectionInfo message.
         * @function verify
         * @memberof songs.SongSectionInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SongSectionInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sectionName != null && message.hasOwnProperty("sectionName"))
                if (!$util.isString(message.sectionName))
                    return "sectionName: string expected";
            return null;
        };

        /**
         * Creates a SongSectionInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.SongSectionInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.SongSectionInfo} SongSectionInfo
         */
        SongSectionInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.SongSectionInfo)
                return object;
            var message = new $root.songs.SongSectionInfo();
            if (object.sectionName != null)
                message.sectionName = String(object.sectionName);
            return message;
        };

        /**
         * Creates a plain object from a SongSectionInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.SongSectionInfo
         * @static
         * @param {songs.SongSectionInfo} message SongSectionInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SongSectionInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.sectionName = "";
            if (message.sectionName != null && message.hasOwnProperty("sectionName"))
                object.sectionName = message.sectionName;
            return object;
        };

        /**
         * Converts this SongSectionInfo to JSON.
         * @function toJSON
         * @memberof songs.SongSectionInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SongSectionInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SongSectionInfo;
    })();

    songs.TabSection = (function() {

        /**
         * Properties of a TabSection.
         * @memberof songs
         * @interface ITabSection
         * @property {instructions.ITabInstruction|null} [instruction] TabSection instruction
         * @property {songs.IVocal|null} [vocal] TabSection vocal
         */

        /**
         * Constructs a new TabSection.
         * @memberof songs
         * @classdesc Represents a TabSection.
         * @implements ITabSection
         * @constructor
         * @param {songs.ITabSection=} [properties] Properties to set
         */
        function TabSection(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TabSection instruction.
         * @member {instructions.ITabInstruction|null|undefined} instruction
         * @memberof songs.TabSection
         * @instance
         */
        TabSection.prototype.instruction = null;

        /**
         * TabSection vocal.
         * @member {songs.IVocal|null|undefined} vocal
         * @memberof songs.TabSection
         * @instance
         */
        TabSection.prototype.vocal = null;

        /**
         * Creates a new TabSection instance using the specified properties.
         * @function create
         * @memberof songs.TabSection
         * @static
         * @param {songs.ITabSection=} [properties] Properties to set
         * @returns {songs.TabSection} TabSection instance
         */
        TabSection.create = function create(properties) {
            return new TabSection(properties);
        };

        /**
         * Encodes the specified TabSection message. Does not implicitly {@link songs.TabSection.verify|verify} messages.
         * @function encode
         * @memberof songs.TabSection
         * @static
         * @param {songs.ITabSection} message TabSection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TabSection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                $root.instructions.TabInstruction.encode(message.instruction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.vocal != null && message.hasOwnProperty("vocal"))
                $root.songs.Vocal.encode(message.vocal, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified TabSection message, length delimited. Does not implicitly {@link songs.TabSection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.TabSection
         * @static
         * @param {songs.ITabSection} message TabSection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TabSection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TabSection message from the specified reader or buffer.
         * @function decode
         * @memberof songs.TabSection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.TabSection} TabSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TabSection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.TabSection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.instruction = $root.instructions.TabInstruction.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vocal = $root.songs.Vocal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TabSection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.TabSection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.TabSection} TabSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TabSection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TabSection message.
         * @function verify
         * @memberof songs.TabSection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TabSection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instruction != null && message.hasOwnProperty("instruction")) {
                var error = $root.instructions.TabInstruction.verify(message.instruction);
                if (error)
                    return "instruction." + error;
            }
            if (message.vocal != null && message.hasOwnProperty("vocal")) {
                var error = $root.songs.Vocal.verify(message.vocal);
                if (error)
                    return "vocal." + error;
            }
            return null;
        };

        /**
         * Creates a TabSection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.TabSection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.TabSection} TabSection
         */
        TabSection.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.TabSection)
                return object;
            var message = new $root.songs.TabSection();
            if (object.instruction != null) {
                if (typeof object.instruction !== "object")
                    throw TypeError(".songs.TabSection.instruction: object expected");
                message.instruction = $root.instructions.TabInstruction.fromObject(object.instruction);
            }
            if (object.vocal != null) {
                if (typeof object.vocal !== "object")
                    throw TypeError(".songs.TabSection.vocal: object expected");
                message.vocal = $root.songs.Vocal.fromObject(object.vocal);
            }
            return message;
        };

        /**
         * Creates a plain object from a TabSection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.TabSection
         * @static
         * @param {songs.TabSection} message TabSection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TabSection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.instruction = null;
                object.vocal = null;
            }
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                object.instruction = $root.instructions.TabInstruction.toObject(message.instruction, options);
            if (message.vocal != null && message.hasOwnProperty("vocal"))
                object.vocal = $root.songs.Vocal.toObject(message.vocal, options);
            return object;
        };

        /**
         * Converts this TabSection to JSON.
         * @function toJSON
         * @memberof songs.TabSection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TabSection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TabSection;
    })();

    songs.ChordSection = (function() {

        /**
         * Properties of a ChordSection.
         * @memberof songs
         * @interface IChordSection
         * @property {instructions.IChordInstruction|null} [instruction] ChordSection instruction
         * @property {songs.IVocal|null} [vocal] ChordSection vocal
         */

        /**
         * Constructs a new ChordSection.
         * @memberof songs
         * @classdesc Represents a ChordSection.
         * @implements IChordSection
         * @constructor
         * @param {songs.IChordSection=} [properties] Properties to set
         */
        function ChordSection(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChordSection instruction.
         * @member {instructions.IChordInstruction|null|undefined} instruction
         * @memberof songs.ChordSection
         * @instance
         */
        ChordSection.prototype.instruction = null;

        /**
         * ChordSection vocal.
         * @member {songs.IVocal|null|undefined} vocal
         * @memberof songs.ChordSection
         * @instance
         */
        ChordSection.prototype.vocal = null;

        /**
         * Creates a new ChordSection instance using the specified properties.
         * @function create
         * @memberof songs.ChordSection
         * @static
         * @param {songs.IChordSection=} [properties] Properties to set
         * @returns {songs.ChordSection} ChordSection instance
         */
        ChordSection.create = function create(properties) {
            return new ChordSection(properties);
        };

        /**
         * Encodes the specified ChordSection message. Does not implicitly {@link songs.ChordSection.verify|verify} messages.
         * @function encode
         * @memberof songs.ChordSection
         * @static
         * @param {songs.IChordSection} message ChordSection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordSection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                $root.instructions.ChordInstruction.encode(message.instruction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.vocal != null && message.hasOwnProperty("vocal"))
                $root.songs.Vocal.encode(message.vocal, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChordSection message, length delimited. Does not implicitly {@link songs.ChordSection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.ChordSection
         * @static
         * @param {songs.IChordSection} message ChordSection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordSection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChordSection message from the specified reader or buffer.
         * @function decode
         * @memberof songs.ChordSection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.ChordSection} ChordSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordSection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.ChordSection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.instruction = $root.instructions.ChordInstruction.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vocal = $root.songs.Vocal.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChordSection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.ChordSection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.ChordSection} ChordSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordSection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChordSection message.
         * @function verify
         * @memberof songs.ChordSection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChordSection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.instruction != null && message.hasOwnProperty("instruction")) {
                var error = $root.instructions.ChordInstruction.verify(message.instruction);
                if (error)
                    return "instruction." + error;
            }
            if (message.vocal != null && message.hasOwnProperty("vocal")) {
                var error = $root.songs.Vocal.verify(message.vocal);
                if (error)
                    return "vocal." + error;
            }
            return null;
        };

        /**
         * Creates a ChordSection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.ChordSection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.ChordSection} ChordSection
         */
        ChordSection.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.ChordSection)
                return object;
            var message = new $root.songs.ChordSection();
            if (object.instruction != null) {
                if (typeof object.instruction !== "object")
                    throw TypeError(".songs.ChordSection.instruction: object expected");
                message.instruction = $root.instructions.ChordInstruction.fromObject(object.instruction);
            }
            if (object.vocal != null) {
                if (typeof object.vocal !== "object")
                    throw TypeError(".songs.ChordSection.vocal: object expected");
                message.vocal = $root.songs.Vocal.fromObject(object.vocal);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChordSection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.ChordSection
         * @static
         * @param {songs.ChordSection} message ChordSection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChordSection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.instruction = null;
                object.vocal = null;
            }
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                object.instruction = $root.instructions.ChordInstruction.toObject(message.instruction, options);
            if (message.vocal != null && message.hasOwnProperty("vocal"))
                object.vocal = $root.songs.Vocal.toObject(message.vocal, options);
            return object;
        };

        /**
         * Converts this ChordSection to JSON.
         * @function toJSON
         * @memberof songs.ChordSection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChordSection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChordSection;
    })();

    songs.SongSection = (function() {

        /**
         * Properties of a SongSection.
         * @memberof songs
         * @interface ISongSection
         * @property {string|null} [id] SongSection id
         * @property {songs.ISongSectionInfo|null} [info] SongSection info
         * @property {songs.SongSection.SectionType|null} [sectionType] SongSection sectionType
         * @property {songs.ITabSection|null} [tabSection] SongSection tabSection
         * @property {songs.IChordSection|null} [chordSection] SongSection chordSection
         */

        /**
         * Constructs a new SongSection.
         * @memberof songs
         * @classdesc Represents a SongSection.
         * @implements ISongSection
         * @constructor
         * @param {songs.ISongSection=} [properties] Properties to set
         */
        function SongSection(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SongSection id.
         * @member {string} id
         * @memberof songs.SongSection
         * @instance
         */
        SongSection.prototype.id = "";

        /**
         * SongSection info.
         * @member {songs.ISongSectionInfo|null|undefined} info
         * @memberof songs.SongSection
         * @instance
         */
        SongSection.prototype.info = null;

        /**
         * SongSection sectionType.
         * @member {songs.SongSection.SectionType} sectionType
         * @memberof songs.SongSection
         * @instance
         */
        SongSection.prototype.sectionType = 0;

        /**
         * SongSection tabSection.
         * @member {songs.ITabSection|null|undefined} tabSection
         * @memberof songs.SongSection
         * @instance
         */
        SongSection.prototype.tabSection = null;

        /**
         * SongSection chordSection.
         * @member {songs.IChordSection|null|undefined} chordSection
         * @memberof songs.SongSection
         * @instance
         */
        SongSection.prototype.chordSection = null;

        /**
         * Creates a new SongSection instance using the specified properties.
         * @function create
         * @memberof songs.SongSection
         * @static
         * @param {songs.ISongSection=} [properties] Properties to set
         * @returns {songs.SongSection} SongSection instance
         */
        SongSection.create = function create(properties) {
            return new SongSection(properties);
        };

        /**
         * Encodes the specified SongSection message. Does not implicitly {@link songs.SongSection.verify|verify} messages.
         * @function encode
         * @memberof songs.SongSection
         * @static
         * @param {songs.ISongSection} message SongSection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SongSection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.info != null && message.hasOwnProperty("info"))
                $root.songs.SongSectionInfo.encode(message.info, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.sectionType != null && message.hasOwnProperty("sectionType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.sectionType);
            if (message.tabSection != null && message.hasOwnProperty("tabSection"))
                $root.songs.TabSection.encode(message.tabSection, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.chordSection != null && message.hasOwnProperty("chordSection"))
                $root.songs.ChordSection.encode(message.chordSection, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SongSection message, length delimited. Does not implicitly {@link songs.SongSection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.SongSection
         * @static
         * @param {songs.ISongSection} message SongSection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SongSection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SongSection message from the specified reader or buffer.
         * @function decode
         * @memberof songs.SongSection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.SongSection} SongSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SongSection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.SongSection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.info = $root.songs.SongSectionInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sectionType = reader.int32();
                    break;
                case 4:
                    message.tabSection = $root.songs.TabSection.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.chordSection = $root.songs.ChordSection.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SongSection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.SongSection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.SongSection} SongSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SongSection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SongSection message.
         * @function verify
         * @memberof songs.SongSection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SongSection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.info != null && message.hasOwnProperty("info")) {
                var error = $root.songs.SongSectionInfo.verify(message.info);
                if (error)
                    return "info." + error;
            }
            if (message.sectionType != null && message.hasOwnProperty("sectionType"))
                switch (message.sectionType) {
                default:
                    return "sectionType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.tabSection != null && message.hasOwnProperty("tabSection")) {
                var error = $root.songs.TabSection.verify(message.tabSection);
                if (error)
                    return "tabSection." + error;
            }
            if (message.chordSection != null && message.hasOwnProperty("chordSection")) {
                var error = $root.songs.ChordSection.verify(message.chordSection);
                if (error)
                    return "chordSection." + error;
            }
            return null;
        };

        /**
         * Creates a SongSection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.SongSection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.SongSection} SongSection
         */
        SongSection.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.SongSection)
                return object;
            var message = new $root.songs.SongSection();
            if (object.id != null)
                message.id = String(object.id);
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".songs.SongSection.info: object expected");
                message.info = $root.songs.SongSectionInfo.fromObject(object.info);
            }
            switch (object.sectionType) {
            case "SECTION_TYPE_UNKNOWN":
            case 0:
                message.sectionType = 0;
                break;
            case "TAB_SECTION":
            case 1:
                message.sectionType = 1;
                break;
            case "CHORD_SECTION":
            case 2:
                message.sectionType = 2;
                break;
            }
            if (object.tabSection != null) {
                if (typeof object.tabSection !== "object")
                    throw TypeError(".songs.SongSection.tabSection: object expected");
                message.tabSection = $root.songs.TabSection.fromObject(object.tabSection);
            }
            if (object.chordSection != null) {
                if (typeof object.chordSection !== "object")
                    throw TypeError(".songs.SongSection.chordSection: object expected");
                message.chordSection = $root.songs.ChordSection.fromObject(object.chordSection);
            }
            return message;
        };

        /**
         * Creates a plain object from a SongSection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.SongSection
         * @static
         * @param {songs.SongSection} message SongSection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SongSection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.info = null;
                object.sectionType = options.enums === String ? "SECTION_TYPE_UNKNOWN" : 0;
                object.tabSection = null;
                object.chordSection = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.songs.SongSectionInfo.toObject(message.info, options);
            if (message.sectionType != null && message.hasOwnProperty("sectionType"))
                object.sectionType = options.enums === String ? $root.songs.SongSection.SectionType[message.sectionType] : message.sectionType;
            if (message.tabSection != null && message.hasOwnProperty("tabSection"))
                object.tabSection = $root.songs.TabSection.toObject(message.tabSection, options);
            if (message.chordSection != null && message.hasOwnProperty("chordSection"))
                object.chordSection = $root.songs.ChordSection.toObject(message.chordSection, options);
            return object;
        };

        /**
         * Converts this SongSection to JSON.
         * @function toJSON
         * @memberof songs.SongSection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SongSection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * SectionType enum.
         * @name songs.SongSection.SectionType
         * @enum {string}
         * @property {number} SECTION_TYPE_UNKNOWN=0 SECTION_TYPE_UNKNOWN value
         * @property {number} TAB_SECTION=1 TAB_SECTION value
         * @property {number} CHORD_SECTION=2 CHORD_SECTION value
         */
        SongSection.SectionType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SECTION_TYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "TAB_SECTION"] = 1;
            values[valuesById[2] = "CHORD_SECTION"] = 2;
            return values;
        })();

        return SongSection;
    })();

    songs.Song = (function() {

        /**
         * Properties of a Song.
         * @memberof songs
         * @interface ISong
         * @property {string|null} [id] Song id
         * @property {string|null} [ownerUid] Song ownerUid
         * @property {songs.Song.State|null} [state] Song state
         * @property {songs.ISongInfo|null} [info] Song info
         * @property {Array.<songs.ISongSection>|null} [sections] Song sections
         */

        /**
         * Constructs a new Song.
         * @memberof songs
         * @classdesc Represents a Song.
         * @implements ISong
         * @constructor
         * @param {songs.ISong=} [properties] Properties to set
         */
        function Song(properties) {
            this.sections = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Song id.
         * @member {string} id
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.id = "";

        /**
         * Song ownerUid.
         * @member {string} ownerUid
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.ownerUid = "";

        /**
         * Song state.
         * @member {songs.Song.State} state
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.state = 0;

        /**
         * Song info.
         * @member {songs.ISongInfo|null|undefined} info
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.info = null;

        /**
         * Song sections.
         * @member {Array.<songs.ISongSection>} sections
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.sections = $util.emptyArray;

        /**
         * Creates a new Song instance using the specified properties.
         * @function create
         * @memberof songs.Song
         * @static
         * @param {songs.ISong=} [properties] Properties to set
         * @returns {songs.Song} Song instance
         */
        Song.create = function create(properties) {
            return new Song(properties);
        };

        /**
         * Encodes the specified Song message. Does not implicitly {@link songs.Song.verify|verify} messages.
         * @function encode
         * @memberof songs.Song
         * @static
         * @param {songs.ISong} message Song message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Song.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.ownerUid != null && message.hasOwnProperty("ownerUid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ownerUid);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.state);
            if (message.info != null && message.hasOwnProperty("info"))
                $root.songs.SongInfo.encode(message.info, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.sections != null && message.sections.length)
                for (var i = 0; i < message.sections.length; ++i)
                    $root.songs.SongSection.encode(message.sections[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Song message, length delimited. Does not implicitly {@link songs.Song.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.Song
         * @static
         * @param {songs.ISong} message Song message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Song.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Song message from the specified reader or buffer.
         * @function decode
         * @memberof songs.Song
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.Song} Song
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Song.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.Song();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.ownerUid = reader.string();
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.info = $root.songs.SongInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.sections && message.sections.length))
                        message.sections = [];
                    message.sections.push($root.songs.SongSection.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Song message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.Song
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.Song} Song
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Song.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Song message.
         * @function verify
         * @memberof songs.Song
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Song.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.ownerUid != null && message.hasOwnProperty("ownerUid"))
                if (!$util.isString(message.ownerUid))
                    return "ownerUid: string expected";
            if (message.state != null && message.hasOwnProperty("state"))
                switch (message.state) {
                default:
                    return "state: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.info != null && message.hasOwnProperty("info")) {
                var error = $root.songs.SongInfo.verify(message.info);
                if (error)
                    return "info." + error;
            }
            if (message.sections != null && message.hasOwnProperty("sections")) {
                if (!Array.isArray(message.sections))
                    return "sections: array expected";
                for (var i = 0; i < message.sections.length; ++i) {
                    var error = $root.songs.SongSection.verify(message.sections[i]);
                    if (error)
                        return "sections." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Song message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.Song
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.Song} Song
         */
        Song.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.Song)
                return object;
            var message = new $root.songs.Song();
            if (object.id != null)
                message.id = String(object.id);
            if (object.ownerUid != null)
                message.ownerUid = String(object.ownerUid);
            switch (object.state) {
            case "STATE_UNKNOWN":
            case 0:
                message.state = 0;
                break;
            case "DRAFT":
            case 1:
                message.state = 1;
                break;
            case "COMPLETE":
            case 2:
                message.state = 2;
                break;
            }
            if (object.info != null) {
                if (typeof object.info !== "object")
                    throw TypeError(".songs.Song.info: object expected");
                message.info = $root.songs.SongInfo.fromObject(object.info);
            }
            if (object.sections) {
                if (!Array.isArray(object.sections))
                    throw TypeError(".songs.Song.sections: array expected");
                message.sections = [];
                for (var i = 0; i < object.sections.length; ++i) {
                    if (typeof object.sections[i] !== "object")
                        throw TypeError(".songs.Song.sections: object expected");
                    message.sections[i] = $root.songs.SongSection.fromObject(object.sections[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Song message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.Song
         * @static
         * @param {songs.Song} message Song
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Song.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sections = [];
            if (options.defaults) {
                object.id = "";
                object.ownerUid = "";
                object.state = options.enums === String ? "STATE_UNKNOWN" : 0;
                object.info = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.ownerUid != null && message.hasOwnProperty("ownerUid"))
                object.ownerUid = message.ownerUid;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.songs.Song.State[message.state] : message.state;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.songs.SongInfo.toObject(message.info, options);
            if (message.sections && message.sections.length) {
                object.sections = [];
                for (var j = 0; j < message.sections.length; ++j)
                    object.sections[j] = $root.songs.SongSection.toObject(message.sections[j], options);
            }
            return object;
        };

        /**
         * Converts this Song to JSON.
         * @function toJSON
         * @memberof songs.Song
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Song.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * State enum.
         * @name songs.Song.State
         * @enum {string}
         * @property {number} STATE_UNKNOWN=0 STATE_UNKNOWN value
         * @property {number} DRAFT=1 DRAFT value
         * @property {number} COMPLETE=2 COMPLETE value
         */
        Song.State = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "STATE_UNKNOWN"] = 0;
            values[valuesById[1] = "DRAFT"] = 1;
            values[valuesById[2] = "COMPLETE"] = 2;
            return values;
        })();

        return Song;
    })();

    return songs;
})();

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
