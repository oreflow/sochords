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

    songs.GuitarInfo = (function() {

        /**
         * Properties of a GuitarInfo.
         * @memberof songs
         * @interface IGuitarInfo
         * @property {number|null} [capo] GuitarInfo capo
         * @property {string|null} [tuning] GuitarInfo tuning
         */

        /**
         * Constructs a new GuitarInfo.
         * @memberof songs
         * @classdesc Represents a GuitarInfo.
         * @implements IGuitarInfo
         * @constructor
         * @param {songs.IGuitarInfo=} [properties] Properties to set
         */
        function GuitarInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuitarInfo capo.
         * @member {number} capo
         * @memberof songs.GuitarInfo
         * @instance
         */
        GuitarInfo.prototype.capo = 0;

        /**
         * GuitarInfo tuning.
         * @member {string} tuning
         * @memberof songs.GuitarInfo
         * @instance
         */
        GuitarInfo.prototype.tuning = "";

        /**
         * Creates a new GuitarInfo instance using the specified properties.
         * @function create
         * @memberof songs.GuitarInfo
         * @static
         * @param {songs.IGuitarInfo=} [properties] Properties to set
         * @returns {songs.GuitarInfo} GuitarInfo instance
         */
        GuitarInfo.create = function create(properties) {
            return new GuitarInfo(properties);
        };

        /**
         * Encodes the specified GuitarInfo message. Does not implicitly {@link songs.GuitarInfo.verify|verify} messages.
         * @function encode
         * @memberof songs.GuitarInfo
         * @static
         * @param {songs.IGuitarInfo} message GuitarInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuitarInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.capo != null && message.hasOwnProperty("capo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.capo);
            if (message.tuning != null && message.hasOwnProperty("tuning"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.tuning);
            return writer;
        };

        /**
         * Encodes the specified GuitarInfo message, length delimited. Does not implicitly {@link songs.GuitarInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.GuitarInfo
         * @static
         * @param {songs.IGuitarInfo} message GuitarInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuitarInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuitarInfo message from the specified reader or buffer.
         * @function decode
         * @memberof songs.GuitarInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.GuitarInfo} GuitarInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuitarInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.GuitarInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.capo = reader.int32();
                    break;
                case 2:
                    message.tuning = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GuitarInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.GuitarInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.GuitarInfo} GuitarInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuitarInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuitarInfo message.
         * @function verify
         * @memberof songs.GuitarInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuitarInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.capo != null && message.hasOwnProperty("capo"))
                if (!$util.isInteger(message.capo))
                    return "capo: integer expected";
            if (message.tuning != null && message.hasOwnProperty("tuning"))
                if (!$util.isString(message.tuning))
                    return "tuning: string expected";
            return null;
        };

        /**
         * Creates a GuitarInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.GuitarInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.GuitarInfo} GuitarInfo
         */
        GuitarInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.GuitarInfo)
                return object;
            var message = new $root.songs.GuitarInfo();
            if (object.capo != null)
                message.capo = object.capo | 0;
            if (object.tuning != null)
                message.tuning = String(object.tuning);
            return message;
        };

        /**
         * Creates a plain object from a GuitarInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.GuitarInfo
         * @static
         * @param {songs.GuitarInfo} message GuitarInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuitarInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.capo = 0;
                object.tuning = "";
            }
            if (message.capo != null && message.hasOwnProperty("capo"))
                object.capo = message.capo;
            if (message.tuning != null && message.hasOwnProperty("tuning"))
                object.tuning = message.tuning;
            return object;
        };

        /**
         * Converts this GuitarInfo to JSON.
         * @function toJSON
         * @memberof songs.GuitarInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuitarInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GuitarInfo;
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

    songs.SongSectionInfo = (function() {

        /**
         * Properties of a SongSectionInfo.
         * @memberof songs
         * @interface ISongSectionInfo
         * @property {string|null} [name] SongSectionInfo name
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
         * SongSectionInfo name.
         * @member {string} name
         * @memberof songs.SongSectionInfo
         * @instance
         */
        SongSectionInfo.prototype.name = "";

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
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
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
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
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
            if (object.name != null)
                message.name = String(object.name);
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
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
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

    songs.BlockLyrics = (function() {

        /**
         * Properties of a BlockLyrics.
         * @memberof songs
         * @interface IBlockLyrics
         * @property {boolean|null} [enabled] BlockLyrics enabled
         * @property {string|null} [lyrics] BlockLyrics lyrics
         */

        /**
         * Constructs a new BlockLyrics.
         * @memberof songs
         * @classdesc Represents a BlockLyrics.
         * @implements IBlockLyrics
         * @constructor
         * @param {songs.IBlockLyrics=} [properties] Properties to set
         */
        function BlockLyrics(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BlockLyrics enabled.
         * @member {boolean} enabled
         * @memberof songs.BlockLyrics
         * @instance
         */
        BlockLyrics.prototype.enabled = false;

        /**
         * BlockLyrics lyrics.
         * @member {string} lyrics
         * @memberof songs.BlockLyrics
         * @instance
         */
        BlockLyrics.prototype.lyrics = "";

        /**
         * Creates a new BlockLyrics instance using the specified properties.
         * @function create
         * @memberof songs.BlockLyrics
         * @static
         * @param {songs.IBlockLyrics=} [properties] Properties to set
         * @returns {songs.BlockLyrics} BlockLyrics instance
         */
        BlockLyrics.create = function create(properties) {
            return new BlockLyrics(properties);
        };

        /**
         * Encodes the specified BlockLyrics message. Does not implicitly {@link songs.BlockLyrics.verify|verify} messages.
         * @function encode
         * @memberof songs.BlockLyrics
         * @static
         * @param {songs.IBlockLyrics} message BlockLyrics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockLyrics.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.enabled);
            if (message.lyrics != null && message.hasOwnProperty("lyrics"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lyrics);
            return writer;
        };

        /**
         * Encodes the specified BlockLyrics message, length delimited. Does not implicitly {@link songs.BlockLyrics.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.BlockLyrics
         * @static
         * @param {songs.IBlockLyrics} message BlockLyrics message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BlockLyrics.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BlockLyrics message from the specified reader or buffer.
         * @function decode
         * @memberof songs.BlockLyrics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.BlockLyrics} BlockLyrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockLyrics.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.BlockLyrics();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.enabled = reader.bool();
                    break;
                case 2:
                    message.lyrics = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BlockLyrics message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.BlockLyrics
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.BlockLyrics} BlockLyrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BlockLyrics.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BlockLyrics message.
         * @function verify
         * @memberof songs.BlockLyrics
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BlockLyrics.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                if (typeof message.enabled !== "boolean")
                    return "enabled: boolean expected";
            if (message.lyrics != null && message.hasOwnProperty("lyrics"))
                if (!$util.isString(message.lyrics))
                    return "lyrics: string expected";
            return null;
        };

        /**
         * Creates a BlockLyrics message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.BlockLyrics
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.BlockLyrics} BlockLyrics
         */
        BlockLyrics.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.BlockLyrics)
                return object;
            var message = new $root.songs.BlockLyrics();
            if (object.enabled != null)
                message.enabled = Boolean(object.enabled);
            if (object.lyrics != null)
                message.lyrics = String(object.lyrics);
            return message;
        };

        /**
         * Creates a plain object from a BlockLyrics message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.BlockLyrics
         * @static
         * @param {songs.BlockLyrics} message BlockLyrics
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BlockLyrics.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.enabled = false;
                object.lyrics = "";
            }
            if (message.enabled != null && message.hasOwnProperty("enabled"))
                object.enabled = message.enabled;
            if (message.lyrics != null && message.hasOwnProperty("lyrics"))
                object.lyrics = message.lyrics;
            return object;
        };

        /**
         * Converts this BlockLyrics to JSON.
         * @function toJSON
         * @memberof songs.BlockLyrics
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BlockLyrics.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BlockLyrics;
    })();

    songs.TabSection = (function() {

        /**
         * Properties of a TabSection.
         * @memberof songs
         * @interface ITabSection
         * @property {instructions.ITabInstruction|null} [instruction] TabSection instruction
         * @property {songs.IBlockLyrics|null} [blockLyrics] TabSection blockLyrics
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
         * TabSection blockLyrics.
         * @member {songs.IBlockLyrics|null|undefined} blockLyrics
         * @memberof songs.TabSection
         * @instance
         */
        TabSection.prototype.blockLyrics = null;

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
            if (message.blockLyrics != null && message.hasOwnProperty("blockLyrics"))
                $root.songs.BlockLyrics.encode(message.blockLyrics, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.blockLyrics = $root.songs.BlockLyrics.decode(reader, reader.uint32());
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
            if (message.blockLyrics != null && message.hasOwnProperty("blockLyrics")) {
                var error = $root.songs.BlockLyrics.verify(message.blockLyrics);
                if (error)
                    return "blockLyrics." + error;
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
            if (object.blockLyrics != null) {
                if (typeof object.blockLyrics !== "object")
                    throw TypeError(".songs.TabSection.blockLyrics: object expected");
                message.blockLyrics = $root.songs.BlockLyrics.fromObject(object.blockLyrics);
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
                object.blockLyrics = null;
            }
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                object.instruction = $root.instructions.TabInstruction.toObject(message.instruction, options);
            if (message.blockLyrics != null && message.hasOwnProperty("blockLyrics"))
                object.blockLyrics = $root.songs.BlockLyrics.toObject(message.blockLyrics, options);
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
            if (options.defaults)
                object.instruction = null;
            if (message.instruction != null && message.hasOwnProperty("instruction"))
                object.instruction = $root.instructions.ChordInstruction.toObject(message.instruction, options);
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
         * @property {songs.IGuitarInfo|null} [guitarInfo] Song guitarInfo
         * @property {Array.<songs.ISongSection>|null} [sections] Song sections
         * @property {Array.<chords.ISongChord>|null} [chords] Song chords
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
            this.chords = [];
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
         * Song guitarInfo.
         * @member {songs.IGuitarInfo|null|undefined} guitarInfo
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.guitarInfo = null;

        /**
         * Song sections.
         * @member {Array.<songs.ISongSection>} sections
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.sections = $util.emptyArray;

        /**
         * Song chords.
         * @member {Array.<chords.ISongChord>} chords
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.chords = $util.emptyArray;

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
            if (message.guitarInfo != null && message.hasOwnProperty("guitarInfo"))
                $root.songs.GuitarInfo.encode(message.guitarInfo, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.chords != null && message.chords.length)
                for (var i = 0; i < message.chords.length; ++i)
                    $root.chords.SongChord.encode(message.chords[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
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
                case 6:
                    message.guitarInfo = $root.songs.GuitarInfo.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.sections && message.sections.length))
                        message.sections = [];
                    message.sections.push($root.songs.SongSection.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.chords && message.chords.length))
                        message.chords = [];
                    message.chords.push($root.chords.SongChord.decode(reader, reader.uint32()));
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
            if (message.guitarInfo != null && message.hasOwnProperty("guitarInfo")) {
                var error = $root.songs.GuitarInfo.verify(message.guitarInfo);
                if (error)
                    return "guitarInfo." + error;
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
            if (message.chords != null && message.hasOwnProperty("chords")) {
                if (!Array.isArray(message.chords))
                    return "chords: array expected";
                for (var i = 0; i < message.chords.length; ++i) {
                    var error = $root.chords.SongChord.verify(message.chords[i]);
                    if (error)
                        return "chords." + error;
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
            if (object.guitarInfo != null) {
                if (typeof object.guitarInfo !== "object")
                    throw TypeError(".songs.Song.guitarInfo: object expected");
                message.guitarInfo = $root.songs.GuitarInfo.fromObject(object.guitarInfo);
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
            if (object.chords) {
                if (!Array.isArray(object.chords))
                    throw TypeError(".songs.Song.chords: array expected");
                message.chords = [];
                for (var i = 0; i < object.chords.length; ++i) {
                    if (typeof object.chords[i] !== "object")
                        throw TypeError(".songs.Song.chords: object expected");
                    message.chords[i] = $root.chords.SongChord.fromObject(object.chords[i]);
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
            if (options.arrays || options.defaults) {
                object.sections = [];
                object.chords = [];
            }
            if (options.defaults) {
                object.id = "";
                object.ownerUid = "";
                object.state = options.enums === String ? "STATE_UNKNOWN" : 0;
                object.info = null;
                object.guitarInfo = null;
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
            if (message.guitarInfo != null && message.hasOwnProperty("guitarInfo"))
                object.guitarInfo = $root.songs.GuitarInfo.toObject(message.guitarInfo, options);
            if (message.chords && message.chords.length) {
                object.chords = [];
                for (var j = 0; j < message.chords.length; ++j)
                    object.chords[j] = $root.chords.SongChord.toObject(message.chords[j], options);
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
