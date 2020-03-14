import * as $protobuf from "protobufjs";
/** Namespace songs. */
export namespace songs {

    /** Properties of an ArtistInfo. */
    interface IArtistInfo {

        /** ArtistInfo name */
        name?: (string|null);
    }

    /** Represents an ArtistInfo. */
    class ArtistInfo implements IArtistInfo {

        /**
         * Constructs a new ArtistInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IArtistInfo);

        /** ArtistInfo name. */
        public name: string;

        /**
         * Creates a new ArtistInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ArtistInfo instance
         */
        public static create(properties?: songs.IArtistInfo): songs.ArtistInfo;

        /**
         * Encodes the specified ArtistInfo message. Does not implicitly {@link songs.ArtistInfo.verify|verify} messages.
         * @param message ArtistInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IArtistInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ArtistInfo message, length delimited. Does not implicitly {@link songs.ArtistInfo.verify|verify} messages.
         * @param message ArtistInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IArtistInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ArtistInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ArtistInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.ArtistInfo;

        /**
         * Decodes an ArtistInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ArtistInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.ArtistInfo;

        /**
         * Verifies an ArtistInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ArtistInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ArtistInfo
         */
        public static fromObject(object: { [k: string]: any }): songs.ArtistInfo;

        /**
         * Creates a plain object from an ArtistInfo message. Also converts values to other types if specified.
         * @param message ArtistInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.ArtistInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ArtistInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SongInfo. */
    interface ISongInfo {

        /** SongInfo title */
        title?: (string|null);

        /** SongInfo artists */
        artists?: (songs.IArtistInfo[]|null);
    }

    /** Represents a SongInfo. */
    class SongInfo implements ISongInfo {

        /**
         * Constructs a new SongInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ISongInfo);

        /** SongInfo title. */
        public title: string;

        /** SongInfo artists. */
        public artists: songs.IArtistInfo[];

        /**
         * Creates a new SongInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SongInfo instance
         */
        public static create(properties?: songs.ISongInfo): songs.SongInfo;

        /**
         * Encodes the specified SongInfo message. Does not implicitly {@link songs.SongInfo.verify|verify} messages.
         * @param message SongInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ISongInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SongInfo message, length delimited. Does not implicitly {@link songs.SongInfo.verify|verify} messages.
         * @param message SongInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ISongInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SongInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SongInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.SongInfo;

        /**
         * Decodes a SongInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SongInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.SongInfo;

        /**
         * Verifies a SongInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SongInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SongInfo
         */
        public static fromObject(object: { [k: string]: any }): songs.SongInfo;

        /**
         * Creates a plain object from a SongInfo message. Also converts values to other types if specified.
         * @param message SongInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.SongInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SongInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SongSearchResult. */
    interface ISongSearchResult {

        /** SongSearchResult id */
        id?: (string|null);

        /** SongSearchResult songInfo */
        songInfo?: (songs.ISongInfo|null);
    }

    /** Represents a SongSearchResult. */
    class SongSearchResult implements ISongSearchResult {

        /**
         * Constructs a new SongSearchResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ISongSearchResult);

        /** SongSearchResult id. */
        public id: string;

        /** SongSearchResult songInfo. */
        public songInfo?: (songs.ISongInfo|null);

        /**
         * Creates a new SongSearchResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SongSearchResult instance
         */
        public static create(properties?: songs.ISongSearchResult): songs.SongSearchResult;

        /**
         * Encodes the specified SongSearchResult message. Does not implicitly {@link songs.SongSearchResult.verify|verify} messages.
         * @param message SongSearchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ISongSearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SongSearchResult message, length delimited. Does not implicitly {@link songs.SongSearchResult.verify|verify} messages.
         * @param message SongSearchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ISongSearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SongSearchResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SongSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.SongSearchResult;

        /**
         * Decodes a SongSearchResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SongSearchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.SongSearchResult;

        /**
         * Verifies a SongSearchResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SongSearchResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SongSearchResult
         */
        public static fromObject(object: { [k: string]: any }): songs.SongSearchResult;

        /**
         * Creates a plain object from a SongSearchResult message. Also converts values to other types if specified.
         * @param message SongSearchResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.SongSearchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SongSearchResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Song. */
    interface ISong {

        /** Song id */
        id?: (string|null);

        /** Song state */
        state?: (songs.Song.State|null);

        /** Song info */
        info?: (songs.ISongInfo|null);
    }

    /** Represents a Song. */
    class Song implements ISong {

        /**
         * Constructs a new Song.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ISong);

        /** Song id. */
        public id: string;

        /** Song state. */
        public state: songs.Song.State;

        /** Song info. */
        public info?: (songs.ISongInfo|null);

        /**
         * Creates a new Song instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Song instance
         */
        public static create(properties?: songs.ISong): songs.Song;

        /**
         * Encodes the specified Song message. Does not implicitly {@link songs.Song.verify|verify} messages.
         * @param message Song message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ISong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Song message, length delimited. Does not implicitly {@link songs.Song.verify|verify} messages.
         * @param message Song message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ISong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Song message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Song
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.Song;

        /**
         * Decodes a Song message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Song
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.Song;

        /**
         * Verifies a Song message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Song message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Song
         */
        public static fromObject(object: { [k: string]: any }): songs.Song;

        /**
         * Creates a plain object from a Song message. Also converts values to other types if specified.
         * @param message Song
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.Song, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Song to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Song {

        /** State enum. */
        enum State {
            STATE_UNKNOWN = 0,
            DRAFT = 1,
            COMPLETE = 2
        }
    }
}
