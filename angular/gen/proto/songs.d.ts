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

        /** SongInfo latestUpdateMillis */
        latestUpdateMillis?: (number|null);
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

        /** SongInfo latestUpdateMillis. */
        public latestUpdateMillis: number;

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

    /** Properties of a GuitarInfo. */
    interface IGuitarInfo {

        /** GuitarInfo capo */
        capo?: (number|null);

        /** GuitarInfo tuning */
        tuning?: (string|null);
    }

    /** Represents a GuitarInfo. */
    class GuitarInfo implements IGuitarInfo {

        /**
         * Constructs a new GuitarInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IGuitarInfo);

        /** GuitarInfo capo. */
        public capo: number;

        /** GuitarInfo tuning. */
        public tuning: string;

        /**
         * Creates a new GuitarInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuitarInfo instance
         */
        public static create(properties?: songs.IGuitarInfo): songs.GuitarInfo;

        /**
         * Encodes the specified GuitarInfo message. Does not implicitly {@link songs.GuitarInfo.verify|verify} messages.
         * @param message GuitarInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IGuitarInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuitarInfo message, length delimited. Does not implicitly {@link songs.GuitarInfo.verify|verify} messages.
         * @param message GuitarInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IGuitarInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuitarInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuitarInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.GuitarInfo;

        /**
         * Decodes a GuitarInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuitarInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.GuitarInfo;

        /**
         * Verifies a GuitarInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuitarInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuitarInfo
         */
        public static fromObject(object: { [k: string]: any }): songs.GuitarInfo;

        /**
         * Creates a plain object from a GuitarInfo message. Also converts values to other types if specified.
         * @param message GuitarInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.GuitarInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuitarInfo to JSON.
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

    /** Properties of a SongSectionInfo. */
    interface ISongSectionInfo {

        /** SongSectionInfo name */
        name?: (string|null);
    }

    /** Represents a SongSectionInfo. */
    class SongSectionInfo implements ISongSectionInfo {

        /**
         * Constructs a new SongSectionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ISongSectionInfo);

        /** SongSectionInfo name. */
        public name: string;

        /**
         * Creates a new SongSectionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SongSectionInfo instance
         */
        public static create(properties?: songs.ISongSectionInfo): songs.SongSectionInfo;

        /**
         * Encodes the specified SongSectionInfo message. Does not implicitly {@link songs.SongSectionInfo.verify|verify} messages.
         * @param message SongSectionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ISongSectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SongSectionInfo message, length delimited. Does not implicitly {@link songs.SongSectionInfo.verify|verify} messages.
         * @param message SongSectionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ISongSectionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SongSectionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SongSectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.SongSectionInfo;

        /**
         * Decodes a SongSectionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SongSectionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.SongSectionInfo;

        /**
         * Verifies a SongSectionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SongSectionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SongSectionInfo
         */
        public static fromObject(object: { [k: string]: any }): songs.SongSectionInfo;

        /**
         * Creates a plain object from a SongSectionInfo message. Also converts values to other types if specified.
         * @param message SongSectionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.SongSectionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SongSectionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockLyrics. */
    interface IBlockLyrics {

        /** BlockLyrics enabled */
        enabled?: (boolean|null);

        /** BlockLyrics lyrics */
        lyrics?: (string|null);
    }

    /** Represents a BlockLyrics. */
    class BlockLyrics implements IBlockLyrics {

        /**
         * Constructs a new BlockLyrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IBlockLyrics);

        /** BlockLyrics enabled. */
        public enabled: boolean;

        /** BlockLyrics lyrics. */
        public lyrics: string;

        /**
         * Creates a new BlockLyrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockLyrics instance
         */
        public static create(properties?: songs.IBlockLyrics): songs.BlockLyrics;

        /**
         * Encodes the specified BlockLyrics message. Does not implicitly {@link songs.BlockLyrics.verify|verify} messages.
         * @param message BlockLyrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IBlockLyrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockLyrics message, length delimited. Does not implicitly {@link songs.BlockLyrics.verify|verify} messages.
         * @param message BlockLyrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IBlockLyrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockLyrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockLyrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.BlockLyrics;

        /**
         * Decodes a BlockLyrics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockLyrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.BlockLyrics;

        /**
         * Verifies a BlockLyrics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockLyrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockLyrics
         */
        public static fromObject(object: { [k: string]: any }): songs.BlockLyrics;

        /**
         * Creates a plain object from a BlockLyrics message. Also converts values to other types if specified.
         * @param message BlockLyrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.BlockLyrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockLyrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TabSection. */
    interface ITabSection {

        /** TabSection instruction */
        instruction?: (instructions.ITabInstruction|null);

        /** TabSection blockLyrics */
        blockLyrics?: (songs.IBlockLyrics|null);
    }

    /** Represents a TabSection. */
    class TabSection implements ITabSection {

        /**
         * Constructs a new TabSection.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ITabSection);

        /** TabSection instruction. */
        public instruction?: (instructions.ITabInstruction|null);

        /** TabSection blockLyrics. */
        public blockLyrics?: (songs.IBlockLyrics|null);

        /**
         * Creates a new TabSection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TabSection instance
         */
        public static create(properties?: songs.ITabSection): songs.TabSection;

        /**
         * Encodes the specified TabSection message. Does not implicitly {@link songs.TabSection.verify|verify} messages.
         * @param message TabSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ITabSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TabSection message, length delimited. Does not implicitly {@link songs.TabSection.verify|verify} messages.
         * @param message TabSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ITabSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TabSection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TabSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.TabSection;

        /**
         * Decodes a TabSection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TabSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.TabSection;

        /**
         * Verifies a TabSection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TabSection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TabSection
         */
        public static fromObject(object: { [k: string]: any }): songs.TabSection;

        /**
         * Creates a plain object from a TabSection message. Also converts values to other types if specified.
         * @param message TabSection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.TabSection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TabSection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChordSection. */
    interface IChordSection {

        /** ChordSection instruction */
        instruction?: (instructions.IChordInstruction|null);
    }

    /** Represents a ChordSection. */
    class ChordSection implements IChordSection {

        /**
         * Constructs a new ChordSection.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.IChordSection);

        /** ChordSection instruction. */
        public instruction?: (instructions.IChordInstruction|null);

        /**
         * Creates a new ChordSection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChordSection instance
         */
        public static create(properties?: songs.IChordSection): songs.ChordSection;

        /**
         * Encodes the specified ChordSection message. Does not implicitly {@link songs.ChordSection.verify|verify} messages.
         * @param message ChordSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.IChordSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChordSection message, length delimited. Does not implicitly {@link songs.ChordSection.verify|verify} messages.
         * @param message ChordSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.IChordSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChordSection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChordSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.ChordSection;

        /**
         * Decodes a ChordSection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChordSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.ChordSection;

        /**
         * Verifies a ChordSection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChordSection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChordSection
         */
        public static fromObject(object: { [k: string]: any }): songs.ChordSection;

        /**
         * Creates a plain object from a ChordSection message. Also converts values to other types if specified.
         * @param message ChordSection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.ChordSection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChordSection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SongSection. */
    interface ISongSection {

        /** SongSection id */
        id?: (string|null);

        /** SongSection info */
        info?: (songs.ISongSectionInfo|null);

        /** SongSection sectionType */
        sectionType?: (songs.SongSection.SectionType|null);

        /** SongSection tabSection */
        tabSection?: (songs.ITabSection|null);

        /** SongSection chordSection */
        chordSection?: (songs.IChordSection|null);
    }

    /** Represents a SongSection. */
    class SongSection implements ISongSection {

        /**
         * Constructs a new SongSection.
         * @param [properties] Properties to set
         */
        constructor(properties?: songs.ISongSection);

        /** SongSection id. */
        public id: string;

        /** SongSection info. */
        public info?: (songs.ISongSectionInfo|null);

        /** SongSection sectionType. */
        public sectionType: songs.SongSection.SectionType;

        /** SongSection tabSection. */
        public tabSection?: (songs.ITabSection|null);

        /** SongSection chordSection. */
        public chordSection?: (songs.IChordSection|null);

        /**
         * Creates a new SongSection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SongSection instance
         */
        public static create(properties?: songs.ISongSection): songs.SongSection;

        /**
         * Encodes the specified SongSection message. Does not implicitly {@link songs.SongSection.verify|verify} messages.
         * @param message SongSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: songs.ISongSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SongSection message, length delimited. Does not implicitly {@link songs.SongSection.verify|verify} messages.
         * @param message SongSection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: songs.ISongSection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SongSection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SongSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): songs.SongSection;

        /**
         * Decodes a SongSection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SongSection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): songs.SongSection;

        /**
         * Verifies a SongSection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SongSection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SongSection
         */
        public static fromObject(object: { [k: string]: any }): songs.SongSection;

        /**
         * Creates a plain object from a SongSection message. Also converts values to other types if specified.
         * @param message SongSection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: songs.SongSection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SongSection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace SongSection {

        /** SectionType enum. */
        enum SectionType {
            SECTION_TYPE_UNKNOWN = 0,
            TAB_SECTION = 1,
            CHORD_SECTION = 2
        }
    }

    /** Properties of a Song. */
    interface ISong {

        /** Song id */
        id?: (string|null);

        /** Song ownerUid */
        ownerUid?: (string|null);

        /** Song state */
        state?: (songs.Song.State|null);

        /** Song info */
        info?: (songs.ISongInfo|null);

        /** Song guitarInfo */
        guitarInfo?: (songs.IGuitarInfo|null);

        /** Song sections */
        sections?: (songs.ISongSection[]|null);
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

        /** Song ownerUid. */
        public ownerUid: string;

        /** Song state. */
        public state: songs.Song.State;

        /** Song info. */
        public info?: (songs.ISongInfo|null);

        /** Song guitarInfo. */
        public guitarInfo?: (songs.IGuitarInfo|null);

        /** Song sections. */
        public sections: songs.ISongSection[];

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

/** Namespace instructions. */
export namespace instructions {

    /** Properties of a StringCombination. */
    interface IStringCombination {

        /** StringCombination e4 */
        e4?: (string|null);

        /** StringCombination b */
        b?: (string|null);

        /** StringCombination g */
        g?: (string|null);

        /** StringCombination d */
        d?: (string|null);

        /** StringCombination a */
        a?: (string|null);

        /** StringCombination e2 */
        e2?: (string|null);

        /** StringCombination chord */
        chord?: (string|null);

        /** StringCombination guide */
        guide?: (string|null);
    }

    /** Represents a StringCombination. */
    class StringCombination implements IStringCombination {

        /**
         * Constructs a new StringCombination.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IStringCombination);

        /** StringCombination e4. */
        public e4: string;

        /** StringCombination b. */
        public b: string;

        /** StringCombination g. */
        public g: string;

        /** StringCombination d. */
        public d: string;

        /** StringCombination a. */
        public a: string;

        /** StringCombination e2. */
        public e2: string;

        /** StringCombination chord. */
        public chord: string;

        /** StringCombination guide. */
        public guide: string;

        /**
         * Creates a new StringCombination instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringCombination instance
         */
        public static create(properties?: instructions.IStringCombination): instructions.StringCombination;

        /**
         * Encodes the specified StringCombination message. Does not implicitly {@link instructions.StringCombination.verify|verify} messages.
         * @param message StringCombination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IStringCombination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringCombination message, length delimited. Does not implicitly {@link instructions.StringCombination.verify|verify} messages.
         * @param message StringCombination message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IStringCombination, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringCombination message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringCombination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.StringCombination;

        /**
         * Decodes a StringCombination message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringCombination
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.StringCombination;

        /**
         * Verifies a StringCombination message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringCombination message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringCombination
         */
        public static fromObject(object: { [k: string]: any }): instructions.StringCombination;

        /**
         * Creates a plain object from a StringCombination message. Also converts values to other types if specified.
         * @param message StringCombination
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.StringCombination, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringCombination to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TabInstructionBlock. */
    interface ITabInstructionBlock {

        /** TabInstructionBlock picks */
        picks?: (instructions.IStringCombination[]|null);

        /** TabInstructionBlock breakLine */
        breakLine?: (boolean|null);

        /** TabInstructionBlock trailingText */
        trailingText?: (string|null);
    }

    /** Represents a TabInstructionBlock. */
    class TabInstructionBlock implements ITabInstructionBlock {

        /**
         * Constructs a new TabInstructionBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.ITabInstructionBlock);

        /** TabInstructionBlock picks. */
        public picks: instructions.IStringCombination[];

        /** TabInstructionBlock breakLine. */
        public breakLine: boolean;

        /** TabInstructionBlock trailingText. */
        public trailingText: string;

        /**
         * Creates a new TabInstructionBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TabInstructionBlock instance
         */
        public static create(properties?: instructions.ITabInstructionBlock): instructions.TabInstructionBlock;

        /**
         * Encodes the specified TabInstructionBlock message. Does not implicitly {@link instructions.TabInstructionBlock.verify|verify} messages.
         * @param message TabInstructionBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.ITabInstructionBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TabInstructionBlock message, length delimited. Does not implicitly {@link instructions.TabInstructionBlock.verify|verify} messages.
         * @param message TabInstructionBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.ITabInstructionBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TabInstructionBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TabInstructionBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.TabInstructionBlock;

        /**
         * Decodes a TabInstructionBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TabInstructionBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.TabInstructionBlock;

        /**
         * Verifies a TabInstructionBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TabInstructionBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TabInstructionBlock
         */
        public static fromObject(object: { [k: string]: any }): instructions.TabInstructionBlock;

        /**
         * Creates a plain object from a TabInstructionBlock message. Also converts values to other types if specified.
         * @param message TabInstructionBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.TabInstructionBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TabInstructionBlock to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TabInstruction. */
    interface ITabInstruction {

        /** TabInstruction tabBlocks */
        tabBlocks?: (instructions.ITabInstructionBlock[]|null);
    }

    /** Represents a TabInstruction. */
    class TabInstruction implements ITabInstruction {

        /**
         * Constructs a new TabInstruction.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.ITabInstruction);

        /** TabInstruction tabBlocks. */
        public tabBlocks: instructions.ITabInstructionBlock[];

        /**
         * Creates a new TabInstruction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TabInstruction instance
         */
        public static create(properties?: instructions.ITabInstruction): instructions.TabInstruction;

        /**
         * Encodes the specified TabInstruction message. Does not implicitly {@link instructions.TabInstruction.verify|verify} messages.
         * @param message TabInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.ITabInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TabInstruction message, length delimited. Does not implicitly {@link instructions.TabInstruction.verify|verify} messages.
         * @param message TabInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.ITabInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TabInstruction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TabInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.TabInstruction;

        /**
         * Decodes a TabInstruction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TabInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.TabInstruction;

        /**
         * Verifies a TabInstruction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TabInstruction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TabInstruction
         */
        public static fromObject(object: { [k: string]: any }): instructions.TabInstruction;

        /**
         * Creates a plain object from a TabInstruction message. Also converts values to other types if specified.
         * @param message TabInstruction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.TabInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TabInstruction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Chord. */
    interface IChord {

        /** Chord name */
        name?: (string|null);

        /** Chord guitarChordId */
        guitarChordId?: (string|null);
    }

    /** Represents a Chord. */
    class Chord implements IChord {

        /**
         * Constructs a new Chord.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChord);

        /** Chord name. */
        public name: string;

        /** Chord guitarChordId. */
        public guitarChordId: string;

        /**
         * Creates a new Chord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Chord instance
         */
        public static create(properties?: instructions.IChord): instructions.Chord;

        /**
         * Encodes the specified Chord message. Does not implicitly {@link instructions.Chord.verify|verify} messages.
         * @param message Chord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Chord message, length delimited. Does not implicitly {@link instructions.Chord.verify|verify} messages.
         * @param message Chord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Chord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Chord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.Chord;

        /**
         * Decodes a Chord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Chord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.Chord;

        /**
         * Verifies a Chord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Chord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Chord
         */
        public static fromObject(object: { [k: string]: any }): instructions.Chord;

        /**
         * Creates a plain object from a Chord message. Also converts values to other types if specified.
         * @param message Chord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.Chord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Chord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChordInLyric. */
    interface IChordInLyric {

        /** ChordInLyric id */
        id?: (string|null);

        /** ChordInLyric chord */
        chord?: (instructions.IChord|null);

        /** ChordInLyric offset */
        offset?: (number|null);
    }

    /** Represents a ChordInLyric. */
    class ChordInLyric implements IChordInLyric {

        /**
         * Constructs a new ChordInLyric.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChordInLyric);

        /** ChordInLyric id. */
        public id: string;

        /** ChordInLyric chord. */
        public chord?: (instructions.IChord|null);

        /** ChordInLyric offset. */
        public offset: number;

        /**
         * Creates a new ChordInLyric instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChordInLyric instance
         */
        public static create(properties?: instructions.IChordInLyric): instructions.ChordInLyric;

        /**
         * Encodes the specified ChordInLyric message. Does not implicitly {@link instructions.ChordInLyric.verify|verify} messages.
         * @param message ChordInLyric message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IChordInLyric, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChordInLyric message, length delimited. Does not implicitly {@link instructions.ChordInLyric.verify|verify} messages.
         * @param message ChordInLyric message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IChordInLyric, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChordInLyric message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChordInLyric
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.ChordInLyric;

        /**
         * Decodes a ChordInLyric message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChordInLyric
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.ChordInLyric;

        /**
         * Verifies a ChordInLyric message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChordInLyric message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChordInLyric
         */
        public static fromObject(object: { [k: string]: any }): instructions.ChordInLyric;

        /**
         * Creates a plain object from a ChordInLyric message. Also converts values to other types if specified.
         * @param message ChordInLyric
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.ChordInLyric, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChordInLyric to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChordsAndLyrics. */
    interface IChordsAndLyrics {

        /** ChordsAndLyrics id */
        id?: (string|null);

        /** ChordsAndLyrics lyricLine */
        lyricLine?: (string|null);

        /** ChordsAndLyrics chordsInLyric */
        chordsInLyric?: (instructions.IChordInLyric[]|null);

        /** ChordsAndLyrics breakLine */
        breakLine?: (boolean|null);
    }

    /** Represents a ChordsAndLyrics. */
    class ChordsAndLyrics implements IChordsAndLyrics {

        /**
         * Constructs a new ChordsAndLyrics.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChordsAndLyrics);

        /** ChordsAndLyrics id. */
        public id: string;

        /** ChordsAndLyrics lyricLine. */
        public lyricLine: string;

        /** ChordsAndLyrics chordsInLyric. */
        public chordsInLyric: instructions.IChordInLyric[];

        /** ChordsAndLyrics breakLine. */
        public breakLine: boolean;

        /**
         * Creates a new ChordsAndLyrics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChordsAndLyrics instance
         */
        public static create(properties?: instructions.IChordsAndLyrics): instructions.ChordsAndLyrics;

        /**
         * Encodes the specified ChordsAndLyrics message. Does not implicitly {@link instructions.ChordsAndLyrics.verify|verify} messages.
         * @param message ChordsAndLyrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IChordsAndLyrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChordsAndLyrics message, length delimited. Does not implicitly {@link instructions.ChordsAndLyrics.verify|verify} messages.
         * @param message ChordsAndLyrics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IChordsAndLyrics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChordsAndLyrics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChordsAndLyrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.ChordsAndLyrics;

        /**
         * Decodes a ChordsAndLyrics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChordsAndLyrics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.ChordsAndLyrics;

        /**
         * Verifies a ChordsAndLyrics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChordsAndLyrics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChordsAndLyrics
         */
        public static fromObject(object: { [k: string]: any }): instructions.ChordsAndLyrics;

        /**
         * Creates a plain object from a ChordsAndLyrics message. Also converts values to other types if specified.
         * @param message ChordsAndLyrics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.ChordsAndLyrics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChordsAndLyrics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Strum. */
    interface IStrum {

        /** Strum direction */
        direction?: (instructions.Strum.StrumDirection|null);

        /** Strum isHighlighted */
        isHighlighted?: (boolean|null);
    }

    /** Represents a Strum. */
    class Strum implements IStrum {

        /**
         * Constructs a new Strum.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IStrum);

        /** Strum direction. */
        public direction: instructions.Strum.StrumDirection;

        /** Strum isHighlighted. */
        public isHighlighted: boolean;

        /**
         * Creates a new Strum instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Strum instance
         */
        public static create(properties?: instructions.IStrum): instructions.Strum;

        /**
         * Encodes the specified Strum message. Does not implicitly {@link instructions.Strum.verify|verify} messages.
         * @param message Strum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IStrum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Strum message, length delimited. Does not implicitly {@link instructions.Strum.verify|verify} messages.
         * @param message Strum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IStrum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Strum message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Strum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.Strum;

        /**
         * Decodes a Strum message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Strum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.Strum;

        /**
         * Verifies a Strum message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Strum message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Strum
         */
        public static fromObject(object: { [k: string]: any }): instructions.Strum;

        /**
         * Creates a plain object from a Strum message. Also converts values to other types if specified.
         * @param message Strum
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.Strum, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Strum to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Strum {

        /** StrumDirection enum. */
        enum StrumDirection {
            NO_STRUM = 0,
            UP = 1,
            DOWN = 2
        }
    }

    /** Properties of a StrummingPattern. */
    interface IStrummingPattern {

        /** StrummingPattern strums */
        strums?: (instructions.IStrum[]|null);
    }

    /** Represents a StrummingPattern. */
    class StrummingPattern implements IStrummingPattern {

        /**
         * Constructs a new StrummingPattern.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IStrummingPattern);

        /** StrummingPattern strums. */
        public strums: instructions.IStrum[];

        /**
         * Creates a new StrummingPattern instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StrummingPattern instance
         */
        public static create(properties?: instructions.IStrummingPattern): instructions.StrummingPattern;

        /**
         * Encodes the specified StrummingPattern message. Does not implicitly {@link instructions.StrummingPattern.verify|verify} messages.
         * @param message StrummingPattern message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IStrummingPattern, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StrummingPattern message, length delimited. Does not implicitly {@link instructions.StrummingPattern.verify|verify} messages.
         * @param message StrummingPattern message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IStrummingPattern, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StrummingPattern message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StrummingPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.StrummingPattern;

        /**
         * Decodes a StrummingPattern message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StrummingPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.StrummingPattern;

        /**
         * Verifies a StrummingPattern message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StrummingPattern message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StrummingPattern
         */
        public static fromObject(object: { [k: string]: any }): instructions.StrummingPattern;

        /**
         * Creates a plain object from a StrummingPattern message. Also converts values to other types if specified.
         * @param message StrummingPattern
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.StrummingPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StrummingPattern to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChordInstruction. */
    interface IChordInstruction {

        /** ChordInstruction chordsAndLyrics */
        chordsAndLyrics?: (instructions.IChordsAndLyrics[]|null);

        /** ChordInstruction chords */
        chords?: (instructions.IChord[]|null);

        /** ChordInstruction strummingPattern */
        strummingPattern?: (instructions.IStrummingPattern|null);
    }

    /** Represents a ChordInstruction. */
    class ChordInstruction implements IChordInstruction {

        /**
         * Constructs a new ChordInstruction.
         * @param [properties] Properties to set
         */
        constructor(properties?: instructions.IChordInstruction);

        /** ChordInstruction chordsAndLyrics. */
        public chordsAndLyrics: instructions.IChordsAndLyrics[];

        /** ChordInstruction chords. */
        public chords: instructions.IChord[];

        /** ChordInstruction strummingPattern. */
        public strummingPattern?: (instructions.IStrummingPattern|null);

        /**
         * Creates a new ChordInstruction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChordInstruction instance
         */
        public static create(properties?: instructions.IChordInstruction): instructions.ChordInstruction;

        /**
         * Encodes the specified ChordInstruction message. Does not implicitly {@link instructions.ChordInstruction.verify|verify} messages.
         * @param message ChordInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: instructions.IChordInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChordInstruction message, length delimited. Does not implicitly {@link instructions.ChordInstruction.verify|verify} messages.
         * @param message ChordInstruction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: instructions.IChordInstruction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChordInstruction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChordInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): instructions.ChordInstruction;

        /**
         * Decodes a ChordInstruction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChordInstruction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): instructions.ChordInstruction;

        /**
         * Verifies a ChordInstruction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChordInstruction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChordInstruction
         */
        public static fromObject(object: { [k: string]: any }): instructions.ChordInstruction;

        /**
         * Creates a plain object from a ChordInstruction message. Also converts values to other types if specified.
         * @param message ChordInstruction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: instructions.ChordInstruction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChordInstruction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
