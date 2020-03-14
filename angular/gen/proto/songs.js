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

    /**
     * SoChordSong enum.
     * @name songs.SoChordSong
     * @enum {string}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} SHALLOW=1 SHALLOW value
     * @property {number} GOOD_RIDDANCE=2 GOOD_RIDDANCE value
     * @property {number} THE_PARTING_GLASS=3 THE_PARTING_GLASS value
     */
    songs.SoChordSong = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "SHALLOW"] = 1;
        values[valuesById[2] = "GOOD_RIDDANCE"] = 2;
        values[valuesById[3] = "THE_PARTING_GLASS"] = 3;
        return values;
    })();

    songs.StringCombination = (function() {

        /**
         * Properties of a StringCombination.
         * @memberof songs
         * @interface IStringCombination
         * @property {number|null} [e4] StringCombination e4
         * @property {number|null} [b] StringCombination b
         * @property {number|null} [g] StringCombination g
         * @property {number|null} [d] StringCombination d
         * @property {number|null} [a] StringCombination a
         * @property {number|null} [e2] StringCombination e2
         * @property {string|null} [name] StringCombination name
         */

        /**
         * Constructs a new StringCombination.
         * @memberof songs
         * @classdesc Represents a StringCombination.
         * @implements IStringCombination
         * @constructor
         * @param {songs.IStringCombination=} [properties] Properties to set
         */
        function StringCombination(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StringCombination e4.
         * @member {number} e4
         * @memberof songs.StringCombination
         * @instance
         */
        StringCombination.prototype.e4 = 0;

        /**
         * StringCombination b.
         * @member {number} b
         * @memberof songs.StringCombination
         * @instance
         */
        StringCombination.prototype.b = 0;

        /**
         * StringCombination g.
         * @member {number} g
         * @memberof songs.StringCombination
         * @instance
         */
        StringCombination.prototype.g = 0;

        /**
         * StringCombination d.
         * @member {number} d
         * @memberof songs.StringCombination
         * @instance
         */
        StringCombination.prototype.d = 0;

        /**
         * StringCombination a.
         * @member {number} a
         * @memberof songs.StringCombination
         * @instance
         */
        StringCombination.prototype.a = 0;

        /**
         * StringCombination e2.
         * @member {number} e2
         * @memberof songs.StringCombination
         * @instance
         */
        StringCombination.prototype.e2 = 0;

        /**
         * StringCombination name.
         * @member {string} name
         * @memberof songs.StringCombination
         * @instance
         */
        StringCombination.prototype.name = "";

        /**
         * Creates a new StringCombination instance using the specified properties.
         * @function create
         * @memberof songs.StringCombination
         * @static
         * @param {songs.IStringCombination=} [properties] Properties to set
         * @returns {songs.StringCombination} StringCombination instance
         */
        StringCombination.create = function create(properties) {
            return new StringCombination(properties);
        };

        /**
         * Encodes the specified StringCombination message. Does not implicitly {@link songs.StringCombination.verify|verify} messages.
         * @function encode
         * @memberof songs.StringCombination
         * @static
         * @param {songs.IStringCombination} message StringCombination message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringCombination.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.e4 != null && message.hasOwnProperty("e4"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.e4);
            if (message.b != null && message.hasOwnProperty("b"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.b);
            if (message.g != null && message.hasOwnProperty("g"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.g);
            if (message.d != null && message.hasOwnProperty("d"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.d);
            if (message.a != null && message.hasOwnProperty("a"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.a);
            if (message.e2 != null && message.hasOwnProperty("e2"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.e2);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified StringCombination message, length delimited. Does not implicitly {@link songs.StringCombination.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.StringCombination
         * @static
         * @param {songs.IStringCombination} message StringCombination message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StringCombination.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StringCombination message from the specified reader or buffer.
         * @function decode
         * @memberof songs.StringCombination
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.StringCombination} StringCombination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StringCombination.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.StringCombination();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.e4 = reader.int32();
                    break;
                case 2:
                    message.b = reader.int32();
                    break;
                case 3:
                    message.g = reader.int32();
                    break;
                case 4:
                    message.d = reader.int32();
                    break;
                case 5:
                    message.a = reader.int32();
                    break;
                case 6:
                    message.e2 = reader.int32();
                    break;
                case 7:
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
         * Decodes a StringCombination message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.StringCombination
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.StringCombination} StringCombination
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
         * @memberof songs.StringCombination
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StringCombination.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.e4 != null && message.hasOwnProperty("e4"))
                if (!$util.isInteger(message.e4))
                    return "e4: integer expected";
            if (message.b != null && message.hasOwnProperty("b"))
                if (!$util.isInteger(message.b))
                    return "b: integer expected";
            if (message.g != null && message.hasOwnProperty("g"))
                if (!$util.isInteger(message.g))
                    return "g: integer expected";
            if (message.d != null && message.hasOwnProperty("d"))
                if (!$util.isInteger(message.d))
                    return "d: integer expected";
            if (message.a != null && message.hasOwnProperty("a"))
                if (!$util.isInteger(message.a))
                    return "a: integer expected";
            if (message.e2 != null && message.hasOwnProperty("e2"))
                if (!$util.isInteger(message.e2))
                    return "e2: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            return null;
        };

        /**
         * Creates a StringCombination message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.StringCombination
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.StringCombination} StringCombination
         */
        StringCombination.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.StringCombination)
                return object;
            var message = new $root.songs.StringCombination();
            if (object.e4 != null)
                message.e4 = object.e4 | 0;
            if (object.b != null)
                message.b = object.b | 0;
            if (object.g != null)
                message.g = object.g | 0;
            if (object.d != null)
                message.d = object.d | 0;
            if (object.a != null)
                message.a = object.a | 0;
            if (object.e2 != null)
                message.e2 = object.e2 | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a StringCombination message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.StringCombination
         * @static
         * @param {songs.StringCombination} message StringCombination
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StringCombination.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.e4 = 0;
                object.b = 0;
                object.g = 0;
                object.d = 0;
                object.a = 0;
                object.e2 = 0;
                object.name = "";
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
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this StringCombination to JSON.
         * @function toJSON
         * @memberof songs.StringCombination
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StringCombination.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StringCombination;
    })();

    /**
     * Tempo enum.
     * @name songs.Tempo
     * @enum {string}
     * @property {number} UNKNOWN_TEMPO=0 UNKNOWN_TEMPO value
     * @property {number} EIGHT=1 EIGHT value
     */
    songs.Tempo = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN_TEMPO"] = 0;
        values[valuesById[1] = "EIGHT"] = 1;
        return values;
    })();

    songs.PickInstruction = (function() {

        /**
         * Properties of a PickInstruction.
         * @memberof songs
         * @interface IPickInstruction
         * @property {songs.Tempo|null} [tempo] PickInstruction tempo
         * @property {Array.<songs.IStringCombination>|null} [picks] PickInstruction picks
         */

        /**
         * Constructs a new PickInstruction.
         * @memberof songs
         * @classdesc Represents a PickInstruction.
         * @implements IPickInstruction
         * @constructor
         * @param {songs.IPickInstruction=} [properties] Properties to set
         */
        function PickInstruction(properties) {
            this.picks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PickInstruction tempo.
         * @member {songs.Tempo} tempo
         * @memberof songs.PickInstruction
         * @instance
         */
        PickInstruction.prototype.tempo = 0;

        /**
         * PickInstruction picks.
         * @member {Array.<songs.IStringCombination>} picks
         * @memberof songs.PickInstruction
         * @instance
         */
        PickInstruction.prototype.picks = $util.emptyArray;

        /**
         * Creates a new PickInstruction instance using the specified properties.
         * @function create
         * @memberof songs.PickInstruction
         * @static
         * @param {songs.IPickInstruction=} [properties] Properties to set
         * @returns {songs.PickInstruction} PickInstruction instance
         */
        PickInstruction.create = function create(properties) {
            return new PickInstruction(properties);
        };

        /**
         * Encodes the specified PickInstruction message. Does not implicitly {@link songs.PickInstruction.verify|verify} messages.
         * @function encode
         * @memberof songs.PickInstruction
         * @static
         * @param {songs.IPickInstruction} message PickInstruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PickInstruction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.tempo != null && message.hasOwnProperty("tempo"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.tempo);
            if (message.picks != null && message.picks.length)
                for (var i = 0; i < message.picks.length; ++i)
                    $root.songs.StringCombination.encode(message.picks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PickInstruction message, length delimited. Does not implicitly {@link songs.PickInstruction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.PickInstruction
         * @static
         * @param {songs.IPickInstruction} message PickInstruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PickInstruction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PickInstruction message from the specified reader or buffer.
         * @function decode
         * @memberof songs.PickInstruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.PickInstruction} PickInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PickInstruction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.PickInstruction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.tempo = reader.int32();
                    break;
                case 2:
                    if (!(message.picks && message.picks.length))
                        message.picks = [];
                    message.picks.push($root.songs.StringCombination.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PickInstruction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.PickInstruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.PickInstruction} PickInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PickInstruction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PickInstruction message.
         * @function verify
         * @memberof songs.PickInstruction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PickInstruction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.tempo != null && message.hasOwnProperty("tempo"))
                switch (message.tempo) {
                default:
                    return "tempo: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.picks != null && message.hasOwnProperty("picks")) {
                if (!Array.isArray(message.picks))
                    return "picks: array expected";
                for (var i = 0; i < message.picks.length; ++i) {
                    var error = $root.songs.StringCombination.verify(message.picks[i]);
                    if (error)
                        return "picks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PickInstruction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.PickInstruction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.PickInstruction} PickInstruction
         */
        PickInstruction.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.PickInstruction)
                return object;
            var message = new $root.songs.PickInstruction();
            switch (object.tempo) {
            case "UNKNOWN_TEMPO":
            case 0:
                message.tempo = 0;
                break;
            case "EIGHT":
            case 1:
                message.tempo = 1;
                break;
            }
            if (object.picks) {
                if (!Array.isArray(object.picks))
                    throw TypeError(".songs.PickInstruction.picks: array expected");
                message.picks = [];
                for (var i = 0; i < object.picks.length; ++i) {
                    if (typeof object.picks[i] !== "object")
                        throw TypeError(".songs.PickInstruction.picks: object expected");
                    message.picks[i] = $root.songs.StringCombination.fromObject(object.picks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PickInstruction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.PickInstruction
         * @static
         * @param {songs.PickInstruction} message PickInstruction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PickInstruction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.picks = [];
            if (options.defaults)
                object.tempo = options.enums === String ? "UNKNOWN_TEMPO" : 0;
            if (message.tempo != null && message.hasOwnProperty("tempo"))
                object.tempo = options.enums === String ? $root.songs.Tempo[message.tempo] : message.tempo;
            if (message.picks && message.picks.length) {
                object.picks = [];
                for (var j = 0; j < message.picks.length; ++j)
                    object.picks[j] = $root.songs.StringCombination.toObject(message.picks[j], options);
            }
            return object;
        };

        /**
         * Converts this PickInstruction to JSON.
         * @function toJSON
         * @memberof songs.PickInstruction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PickInstruction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PickInstruction;
    })();

    /**
     * Strum enum.
     * @name songs.Strum
     * @enum {string}
     * @property {number} NONE=0 NONE value
     * @property {number} UP=1 UP value
     * @property {number} DOWN=2 DOWN value
     */
    songs.Strum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NONE"] = 0;
        values[valuesById[1] = "UP"] = 1;
        values[valuesById[2] = "DOWN"] = 2;
        return values;
    })();

    songs.Chord = (function() {

        /**
         * Properties of a Chord.
         * @memberof songs
         * @interface IChord
         * @property {string|null} [name] Chord name
         * @property {Array.<songs.Strum>|null} [strummingPattern] Chord strummingPattern
         */

        /**
         * Constructs a new Chord.
         * @memberof songs
         * @classdesc Represents a Chord.
         * @implements IChord
         * @constructor
         * @param {songs.IChord=} [properties] Properties to set
         */
        function Chord(properties) {
            this.strummingPattern = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chord name.
         * @member {string} name
         * @memberof songs.Chord
         * @instance
         */
        Chord.prototype.name = "";

        /**
         * Chord strummingPattern.
         * @member {Array.<songs.Strum>} strummingPattern
         * @memberof songs.Chord
         * @instance
         */
        Chord.prototype.strummingPattern = $util.emptyArray;

        /**
         * Creates a new Chord instance using the specified properties.
         * @function create
         * @memberof songs.Chord
         * @static
         * @param {songs.IChord=} [properties] Properties to set
         * @returns {songs.Chord} Chord instance
         */
        Chord.create = function create(properties) {
            return new Chord(properties);
        };

        /**
         * Encodes the specified Chord message. Does not implicitly {@link songs.Chord.verify|verify} messages.
         * @function encode
         * @memberof songs.Chord
         * @static
         * @param {songs.IChord} message Chord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.strummingPattern != null && message.strummingPattern.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.strummingPattern.length; ++i)
                    writer.int32(message.strummingPattern[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified Chord message, length delimited. Does not implicitly {@link songs.Chord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.Chord
         * @static
         * @param {songs.IChord} message Chord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chord message from the specified reader or buffer.
         * @function decode
         * @memberof songs.Chord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.Chord} Chord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chord.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.Chord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    if (!(message.strummingPattern && message.strummingPattern.length))
                        message.strummingPattern = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.strummingPattern.push(reader.int32());
                    } else
                        message.strummingPattern.push(reader.int32());
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
         * @memberof songs.Chord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.Chord} Chord
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
         * @memberof songs.Chord
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
            if (message.strummingPattern != null && message.hasOwnProperty("strummingPattern")) {
                if (!Array.isArray(message.strummingPattern))
                    return "strummingPattern: array expected";
                for (var i = 0; i < message.strummingPattern.length; ++i)
                    switch (message.strummingPattern[i]) {
                    default:
                        return "strummingPattern: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
            }
            return null;
        };

        /**
         * Creates a Chord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.Chord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.Chord} Chord
         */
        Chord.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.Chord)
                return object;
            var message = new $root.songs.Chord();
            if (object.name != null)
                message.name = String(object.name);
            if (object.strummingPattern) {
                if (!Array.isArray(object.strummingPattern))
                    throw TypeError(".songs.Chord.strummingPattern: array expected");
                message.strummingPattern = [];
                for (var i = 0; i < object.strummingPattern.length; ++i)
                    switch (object.strummingPattern[i]) {
                    default:
                    case "NONE":
                    case 0:
                        message.strummingPattern[i] = 0;
                        break;
                    case "UP":
                    case 1:
                        message.strummingPattern[i] = 1;
                        break;
                    case "DOWN":
                    case 2:
                        message.strummingPattern[i] = 2;
                        break;
                    }
            }
            return message;
        };

        /**
         * Creates a plain object from a Chord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.Chord
         * @static
         * @param {songs.Chord} message Chord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.strummingPattern = [];
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.strummingPattern && message.strummingPattern.length) {
                object.strummingPattern = [];
                for (var j = 0; j < message.strummingPattern.length; ++j)
                    object.strummingPattern[j] = options.enums === String ? $root.songs.Strum[message.strummingPattern[j]] : message.strummingPattern[j];
            }
            return object;
        };

        /**
         * Converts this Chord to JSON.
         * @function toJSON
         * @memberof songs.Chord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Chord;
    })();

    songs.ChordInstruction = (function() {

        /**
         * Properties of a ChordInstruction.
         * @memberof songs
         * @interface IChordInstruction
         * @property {Array.<songs.IChord>|null} [chords] ChordInstruction chords
         */

        /**
         * Constructs a new ChordInstruction.
         * @memberof songs
         * @classdesc Represents a ChordInstruction.
         * @implements IChordInstruction
         * @constructor
         * @param {songs.IChordInstruction=} [properties] Properties to set
         */
        function ChordInstruction(properties) {
            this.chords = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChordInstruction chords.
         * @member {Array.<songs.IChord>} chords
         * @memberof songs.ChordInstruction
         * @instance
         */
        ChordInstruction.prototype.chords = $util.emptyArray;

        /**
         * Creates a new ChordInstruction instance using the specified properties.
         * @function create
         * @memberof songs.ChordInstruction
         * @static
         * @param {songs.IChordInstruction=} [properties] Properties to set
         * @returns {songs.ChordInstruction} ChordInstruction instance
         */
        ChordInstruction.create = function create(properties) {
            return new ChordInstruction(properties);
        };

        /**
         * Encodes the specified ChordInstruction message. Does not implicitly {@link songs.ChordInstruction.verify|verify} messages.
         * @function encode
         * @memberof songs.ChordInstruction
         * @static
         * @param {songs.IChordInstruction} message ChordInstruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordInstruction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.chords != null && message.chords.length)
                for (var i = 0; i < message.chords.length; ++i)
                    $root.songs.Chord.encode(message.chords[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChordInstruction message, length delimited. Does not implicitly {@link songs.ChordInstruction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.ChordInstruction
         * @static
         * @param {songs.IChordInstruction} message ChordInstruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChordInstruction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChordInstruction message from the specified reader or buffer.
         * @function decode
         * @memberof songs.ChordInstruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.ChordInstruction} ChordInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChordInstruction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.ChordInstruction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.chords && message.chords.length))
                        message.chords = [];
                    message.chords.push($root.songs.Chord.decode(reader, reader.uint32()));
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
         * @memberof songs.ChordInstruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.ChordInstruction} ChordInstruction
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
         * @memberof songs.ChordInstruction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChordInstruction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.chords != null && message.hasOwnProperty("chords")) {
                if (!Array.isArray(message.chords))
                    return "chords: array expected";
                for (var i = 0; i < message.chords.length; ++i) {
                    var error = $root.songs.Chord.verify(message.chords[i]);
                    if (error)
                        return "chords." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ChordInstruction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.ChordInstruction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.ChordInstruction} ChordInstruction
         */
        ChordInstruction.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.ChordInstruction)
                return object;
            var message = new $root.songs.ChordInstruction();
            if (object.chords) {
                if (!Array.isArray(object.chords))
                    throw TypeError(".songs.ChordInstruction.chords: array expected");
                message.chords = [];
                for (var i = 0; i < object.chords.length; ++i) {
                    if (typeof object.chords[i] !== "object")
                        throw TypeError(".songs.ChordInstruction.chords: object expected");
                    message.chords[i] = $root.songs.Chord.fromObject(object.chords[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ChordInstruction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.ChordInstruction
         * @static
         * @param {songs.ChordInstruction} message ChordInstruction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChordInstruction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.chords = [];
            if (message.chords && message.chords.length) {
                object.chords = [];
                for (var j = 0; j < message.chords.length; ++j)
                    object.chords[j] = $root.songs.Chord.toObject(message.chords[j], options);
            }
            return object;
        };

        /**
         * Converts this ChordInstruction to JSON.
         * @function toJSON
         * @memberof songs.ChordInstruction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChordInstruction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChordInstruction;
    })();

    songs.InstructionSection = (function() {

        /**
         * Properties of an InstructionSection.
         * @memberof songs
         * @interface IInstructionSection
         * @property {songs.IPickInstruction|null} [pickInstruction] InstructionSection pickInstruction
         * @property {songs.IChordInstruction|null} [chordInstruction] InstructionSection chordInstruction
         */

        /**
         * Constructs a new InstructionSection.
         * @memberof songs
         * @classdesc Represents an InstructionSection.
         * @implements IInstructionSection
         * @constructor
         * @param {songs.IInstructionSection=} [properties] Properties to set
         */
        function InstructionSection(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InstructionSection pickInstruction.
         * @member {songs.IPickInstruction|null|undefined} pickInstruction
         * @memberof songs.InstructionSection
         * @instance
         */
        InstructionSection.prototype.pickInstruction = null;

        /**
         * InstructionSection chordInstruction.
         * @member {songs.IChordInstruction|null|undefined} chordInstruction
         * @memberof songs.InstructionSection
         * @instance
         */
        InstructionSection.prototype.chordInstruction = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * InstructionSection instruction.
         * @member {"pickInstruction"|"chordInstruction"|undefined} instruction
         * @memberof songs.InstructionSection
         * @instance
         */
        Object.defineProperty(InstructionSection.prototype, "instruction", {
            get: $util.oneOfGetter($oneOfFields = ["pickInstruction", "chordInstruction"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new InstructionSection instance using the specified properties.
         * @function create
         * @memberof songs.InstructionSection
         * @static
         * @param {songs.IInstructionSection=} [properties] Properties to set
         * @returns {songs.InstructionSection} InstructionSection instance
         */
        InstructionSection.create = function create(properties) {
            return new InstructionSection(properties);
        };

        /**
         * Encodes the specified InstructionSection message. Does not implicitly {@link songs.InstructionSection.verify|verify} messages.
         * @function encode
         * @memberof songs.InstructionSection
         * @static
         * @param {songs.IInstructionSection} message InstructionSection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InstructionSection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pickInstruction != null && message.hasOwnProperty("pickInstruction"))
                $root.songs.PickInstruction.encode(message.pickInstruction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chordInstruction != null && message.hasOwnProperty("chordInstruction"))
                $root.songs.ChordInstruction.encode(message.chordInstruction, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InstructionSection message, length delimited. Does not implicitly {@link songs.InstructionSection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.InstructionSection
         * @static
         * @param {songs.IInstructionSection} message InstructionSection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InstructionSection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InstructionSection message from the specified reader or buffer.
         * @function decode
         * @memberof songs.InstructionSection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.InstructionSection} InstructionSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InstructionSection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.InstructionSection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.pickInstruction = $root.songs.PickInstruction.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chordInstruction = $root.songs.ChordInstruction.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InstructionSection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.InstructionSection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.InstructionSection} InstructionSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InstructionSection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InstructionSection message.
         * @function verify
         * @memberof songs.InstructionSection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InstructionSection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.pickInstruction != null && message.hasOwnProperty("pickInstruction")) {
                properties.instruction = 1;
                {
                    var error = $root.songs.PickInstruction.verify(message.pickInstruction);
                    if (error)
                        return "pickInstruction." + error;
                }
            }
            if (message.chordInstruction != null && message.hasOwnProperty("chordInstruction")) {
                if (properties.instruction === 1)
                    return "instruction: multiple values";
                properties.instruction = 1;
                {
                    var error = $root.songs.ChordInstruction.verify(message.chordInstruction);
                    if (error)
                        return "chordInstruction." + error;
                }
            }
            return null;
        };

        /**
         * Creates an InstructionSection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.InstructionSection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.InstructionSection} InstructionSection
         */
        InstructionSection.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.InstructionSection)
                return object;
            var message = new $root.songs.InstructionSection();
            if (object.pickInstruction != null) {
                if (typeof object.pickInstruction !== "object")
                    throw TypeError(".songs.InstructionSection.pickInstruction: object expected");
                message.pickInstruction = $root.songs.PickInstruction.fromObject(object.pickInstruction);
            }
            if (object.chordInstruction != null) {
                if (typeof object.chordInstruction !== "object")
                    throw TypeError(".songs.InstructionSection.chordInstruction: object expected");
                message.chordInstruction = $root.songs.ChordInstruction.fromObject(object.chordInstruction);
            }
            return message;
        };

        /**
         * Creates a plain object from an InstructionSection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.InstructionSection
         * @static
         * @param {songs.InstructionSection} message InstructionSection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InstructionSection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.pickInstruction != null && message.hasOwnProperty("pickInstruction")) {
                object.pickInstruction = $root.songs.PickInstruction.toObject(message.pickInstruction, options);
                if (options.oneofs)
                    object.instruction = "pickInstruction";
            }
            if (message.chordInstruction != null && message.hasOwnProperty("chordInstruction")) {
                object.chordInstruction = $root.songs.ChordInstruction.toObject(message.chordInstruction, options);
                if (options.oneofs)
                    object.instruction = "chordInstruction";
            }
            return object;
        };

        /**
         * Converts this InstructionSection to JSON.
         * @function toJSON
         * @memberof songs.InstructionSection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InstructionSection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InstructionSection;
    })();

    songs.Instruction = (function() {

        /**
         * Properties of an Instruction.
         * @memberof songs
         * @interface IInstruction
         * @property {Array.<songs.IInstructionSection>|null} [sections] Instruction sections
         */

        /**
         * Constructs a new Instruction.
         * @memberof songs
         * @classdesc Represents an Instruction.
         * @implements IInstruction
         * @constructor
         * @param {songs.IInstruction=} [properties] Properties to set
         */
        function Instruction(properties) {
            this.sections = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Instruction sections.
         * @member {Array.<songs.IInstructionSection>} sections
         * @memberof songs.Instruction
         * @instance
         */
        Instruction.prototype.sections = $util.emptyArray;

        /**
         * Creates a new Instruction instance using the specified properties.
         * @function create
         * @memberof songs.Instruction
         * @static
         * @param {songs.IInstruction=} [properties] Properties to set
         * @returns {songs.Instruction} Instruction instance
         */
        Instruction.create = function create(properties) {
            return new Instruction(properties);
        };

        /**
         * Encodes the specified Instruction message. Does not implicitly {@link songs.Instruction.verify|verify} messages.
         * @function encode
         * @memberof songs.Instruction
         * @static
         * @param {songs.IInstruction} message Instruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Instruction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sections != null && message.sections.length)
                for (var i = 0; i < message.sections.length; ++i)
                    $root.songs.InstructionSection.encode(message.sections[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Instruction message, length delimited. Does not implicitly {@link songs.Instruction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof songs.Instruction
         * @static
         * @param {songs.IInstruction} message Instruction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Instruction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Instruction message from the specified reader or buffer.
         * @function decode
         * @memberof songs.Instruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {songs.Instruction} Instruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Instruction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.Instruction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.sections && message.sections.length))
                        message.sections = [];
                    message.sections.push($root.songs.InstructionSection.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Instruction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof songs.Instruction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {songs.Instruction} Instruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Instruction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Instruction message.
         * @function verify
         * @memberof songs.Instruction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Instruction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.sections != null && message.hasOwnProperty("sections")) {
                if (!Array.isArray(message.sections))
                    return "sections: array expected";
                for (var i = 0; i < message.sections.length; ++i) {
                    var error = $root.songs.InstructionSection.verify(message.sections[i]);
                    if (error)
                        return "sections." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Instruction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof songs.Instruction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {songs.Instruction} Instruction
         */
        Instruction.fromObject = function fromObject(object) {
            if (object instanceof $root.songs.Instruction)
                return object;
            var message = new $root.songs.Instruction();
            if (object.sections) {
                if (!Array.isArray(object.sections))
                    throw TypeError(".songs.Instruction.sections: array expected");
                message.sections = [];
                for (var i = 0; i < object.sections.length; ++i) {
                    if (typeof object.sections[i] !== "object")
                        throw TypeError(".songs.Instruction.sections: object expected");
                    message.sections[i] = $root.songs.InstructionSection.fromObject(object.sections[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Instruction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof songs.Instruction
         * @static
         * @param {songs.Instruction} message Instruction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Instruction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.sections = [];
            if (message.sections && message.sections.length) {
                object.sections = [];
                for (var j = 0; j < message.sections.length; ++j)
                    object.sections[j] = $root.songs.InstructionSection.toObject(message.sections[j], options);
            }
            return object;
        };

        /**
         * Converts this Instruction to JSON.
         * @function toJSON
         * @memberof songs.Instruction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Instruction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Instruction;
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

    songs.SongSection = (function() {

        /**
         * Properties of a SongSection.
         * @memberof songs
         * @interface ISongSection
         * @property {songs.SongSection.Section|null} [section] SongSection section
         * @property {number|null} [number] SongSection number
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
         * SongSection section.
         * @member {songs.SongSection.Section} section
         * @memberof songs.SongSection
         * @instance
         */
        SongSection.prototype.section = 0;

        /**
         * SongSection number.
         * @member {number} number
         * @memberof songs.SongSection
         * @instance
         */
        SongSection.prototype.number = 0;

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
            if (message.section != null && message.hasOwnProperty("section"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.section);
            if (message.number != null && message.hasOwnProperty("number"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
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
                    message.section = reader.int32();
                    break;
                case 2:
                    message.number = reader.int32();
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
            if (message.section != null && message.hasOwnProperty("section"))
                switch (message.section) {
                default:
                    return "section: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.number != null && message.hasOwnProperty("number"))
                if (!$util.isInteger(message.number))
                    return "number: integer expected";
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
            switch (object.section) {
            case "UNKNOWN_SECTION":
            case 0:
                message.section = 0;
                break;
            case "INTRO":
            case 1:
                message.section = 1;
                break;
            case "VERSE":
            case 2:
                message.section = 2;
                break;
            case "PRE_CHORUS":
            case 3:
                message.section = 3;
                break;
            case "CHORUS":
            case 4:
                message.section = 4;
                break;
            case "BRIDGE":
            case 5:
                message.section = 5;
                break;
            case "OUTRO":
            case 6:
                message.section = 6;
                break;
            case "POST_CHORUS":
            case 7:
                message.section = 7;
                break;
            case "SOLO":
            case 8:
                message.section = 8;
                break;
            case "BREAK":
            case 9:
                message.section = 9;
                break;
            }
            if (object.number != null)
                message.number = object.number | 0;
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
                object.section = options.enums === String ? "UNKNOWN_SECTION" : 0;
                object.number = 0;
            }
            if (message.section != null && message.hasOwnProperty("section"))
                object.section = options.enums === String ? $root.songs.SongSection.Section[message.section] : message.section;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
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
         * Section enum.
         * @name songs.SongSection.Section
         * @enum {string}
         * @property {number} UNKNOWN_SECTION=0 UNKNOWN_SECTION value
         * @property {number} INTRO=1 INTRO value
         * @property {number} VERSE=2 VERSE value
         * @property {number} PRE_CHORUS=3 PRE_CHORUS value
         * @property {number} CHORUS=4 CHORUS value
         * @property {number} BRIDGE=5 BRIDGE value
         * @property {number} OUTRO=6 OUTRO value
         * @property {number} POST_CHORUS=7 POST_CHORUS value
         * @property {number} SOLO=8 SOLO value
         * @property {number} BREAK=9 BREAK value
         */
        SongSection.Section = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_SECTION"] = 0;
            values[valuesById[1] = "INTRO"] = 1;
            values[valuesById[2] = "VERSE"] = 2;
            values[valuesById[3] = "PRE_CHORUS"] = 3;
            values[valuesById[4] = "CHORUS"] = 4;
            values[valuesById[5] = "BRIDGE"] = 5;
            values[valuesById[6] = "OUTRO"] = 6;
            values[valuesById[7] = "POST_CHORUS"] = 7;
            values[valuesById[8] = "SOLO"] = 8;
            values[valuesById[9] = "BREAK"] = 9;
            return values;
        })();

        return SongSection;
    })();

    songs.Song = (function() {

        /**
         * Properties of a Song.
         * @memberof songs
         * @interface ISong
         * @property {Array.<songs.ISongSection>|null} [sections] Song sections
         * @property {Object.<string,songs.IInstruction>|null} [instructions] Song instructions
         * @property {Object.<string,songs.IVocal>|null} [vocals] Song vocals
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
            this.instructions = {};
            this.vocals = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Song sections.
         * @member {Array.<songs.ISongSection>} sections
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.sections = $util.emptyArray;

        /**
         * Song instructions.
         * @member {Object.<string,songs.IInstruction>} instructions
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.instructions = $util.emptyObject;

        /**
         * Song vocals.
         * @member {Object.<string,songs.IVocal>} vocals
         * @memberof songs.Song
         * @instance
         */
        Song.prototype.vocals = $util.emptyObject;

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
            if (message.sections != null && message.sections.length)
                for (var i = 0; i < message.sections.length; ++i)
                    $root.songs.SongSection.encode(message.sections[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.instructions != null && message.hasOwnProperty("instructions"))
                for (var keys = Object.keys(message.instructions), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.songs.Instruction.encode(message.instructions[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.vocals != null && message.hasOwnProperty("vocals"))
                for (var keys = Object.keys(message.vocals), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.songs.Vocal.encode(message.vocals[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
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
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.songs.Song(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.sections && message.sections.length))
                        message.sections = [];
                    message.sections.push($root.songs.SongSection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    reader.skip().pos++;
                    if (message.instructions === $util.emptyObject)
                        message.instructions = {};
                    key = reader.string();
                    reader.pos++;
                    message.instructions[key] = $root.songs.Instruction.decode(reader, reader.uint32());
                    break;
                case 3:
                    reader.skip().pos++;
                    if (message.vocals === $util.emptyObject)
                        message.vocals = {};
                    key = reader.string();
                    reader.pos++;
                    message.vocals[key] = $root.songs.Vocal.decode(reader, reader.uint32());
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
            if (message.sections != null && message.hasOwnProperty("sections")) {
                if (!Array.isArray(message.sections))
                    return "sections: array expected";
                for (var i = 0; i < message.sections.length; ++i) {
                    var error = $root.songs.SongSection.verify(message.sections[i]);
                    if (error)
                        return "sections." + error;
                }
            }
            if (message.instructions != null && message.hasOwnProperty("instructions")) {
                if (!$util.isObject(message.instructions))
                    return "instructions: object expected";
                var key = Object.keys(message.instructions);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.songs.Instruction.verify(message.instructions[key[i]]);
                    if (error)
                        return "instructions." + error;
                }
            }
            if (message.vocals != null && message.hasOwnProperty("vocals")) {
                if (!$util.isObject(message.vocals))
                    return "vocals: object expected";
                var key = Object.keys(message.vocals);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.songs.Vocal.verify(message.vocals[key[i]]);
                    if (error)
                        return "vocals." + error;
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
            if (object.instructions) {
                if (typeof object.instructions !== "object")
                    throw TypeError(".songs.Song.instructions: object expected");
                message.instructions = {};
                for (var keys = Object.keys(object.instructions), i = 0; i < keys.length; ++i) {
                    if (typeof object.instructions[keys[i]] !== "object")
                        throw TypeError(".songs.Song.instructions: object expected");
                    message.instructions[keys[i]] = $root.songs.Instruction.fromObject(object.instructions[keys[i]]);
                }
            }
            if (object.vocals) {
                if (typeof object.vocals !== "object")
                    throw TypeError(".songs.Song.vocals: object expected");
                message.vocals = {};
                for (var keys = Object.keys(object.vocals), i = 0; i < keys.length; ++i) {
                    if (typeof object.vocals[keys[i]] !== "object")
                        throw TypeError(".songs.Song.vocals: object expected");
                    message.vocals[keys[i]] = $root.songs.Vocal.fromObject(object.vocals[keys[i]]);
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
            if (options.objects || options.defaults) {
                object.instructions = {};
                object.vocals = {};
            }
            if (message.sections && message.sections.length) {
                object.sections = [];
                for (var j = 0; j < message.sections.length; ++j)
                    object.sections[j] = $root.songs.SongSection.toObject(message.sections[j], options);
            }
            var keys2;
            if (message.instructions && (keys2 = Object.keys(message.instructions)).length) {
                object.instructions = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.instructions[keys2[j]] = $root.songs.Instruction.toObject(message.instructions[keys2[j]], options);
            }
            if (message.vocals && (keys2 = Object.keys(message.vocals)).length) {
                object.vocals = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.vocals[keys2[j]] = $root.songs.Vocal.toObject(message.vocals[keys2[j]], options);
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

        return Song;
    })();

    return songs;
})();

module.exports = $root;
