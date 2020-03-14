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
            if (options.defaults)
                object.title = "";
            if (message.title != null && message.hasOwnProperty("title"))
                object.title = message.title;
            if (message.artists && message.artists.length) {
                object.artists = [];
                for (var j = 0; j < message.artists.length; ++j)
                    object.artists[j] = $root.songs.ArtistInfo.toObject(message.artists[j], options);
            }
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

    songs.Song = (function() {

        /**
         * Properties of a Song.
         * @memberof songs
         * @interface ISong
         * @property {string|null} [id] Song id
         * @property {songs.Song.State|null} [state] Song state
         * @property {songs.ISongInfo|null} [info] Song info
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
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.state);
            if (message.info != null && message.hasOwnProperty("info"))
                $root.songs.SongInfo.encode(message.info, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                    message.state = reader.int32();
                    break;
                case 3:
                    message.info = $root.songs.SongInfo.decode(reader, reader.uint32());
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
            if (options.defaults) {
                object.id = "";
                object.state = options.enums === String ? "STATE_UNKNOWN" : 0;
                object.info = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = options.enums === String ? $root.songs.Song.State[message.state] : message.state;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = $root.songs.SongInfo.toObject(message.info, options);
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

module.exports = $root;
