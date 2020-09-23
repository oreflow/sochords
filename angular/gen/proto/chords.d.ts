import * as $protobuf from "protobufjs";
/** Namespace chords. */
export namespace chords {

    /** Properties of a ChordPattern. */
    interface IChordPattern {

        /** ChordPattern e4 */
        e4?: (string|null);

        /** ChordPattern b */
        b?: (string|null);

        /** ChordPattern g */
        g?: (string|null);

        /** ChordPattern d */
        d?: (string|null);

        /** ChordPattern a */
        a?: (string|null);

        /** ChordPattern e2 */
        e2?: (string|null);
    }

    /** Represents a ChordPattern. */
    class ChordPattern implements IChordPattern {

        /**
         * Constructs a new ChordPattern.
         * @param [properties] Properties to set
         */
        constructor(properties?: chords.IChordPattern);

        /** ChordPattern e4. */
        public e4: string;

        /** ChordPattern b. */
        public b: string;

        /** ChordPattern g. */
        public g: string;

        /** ChordPattern d. */
        public d: string;

        /** ChordPattern a. */
        public a: string;

        /** ChordPattern e2. */
        public e2: string;

        /**
         * Creates a new ChordPattern instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChordPattern instance
         */
        public static create(properties?: chords.IChordPattern): chords.ChordPattern;

        /**
         * Encodes the specified ChordPattern message. Does not implicitly {@link chords.ChordPattern.verify|verify} messages.
         * @param message ChordPattern message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chords.IChordPattern, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChordPattern message, length delimited. Does not implicitly {@link chords.ChordPattern.verify|verify} messages.
         * @param message ChordPattern message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chords.IChordPattern, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChordPattern message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChordPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chords.ChordPattern;

        /**
         * Decodes a ChordPattern message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChordPattern
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chords.ChordPattern;

        /**
         * Verifies a ChordPattern message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChordPattern message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChordPattern
         */
        public static fromObject(object: { [k: string]: any }): chords.ChordPattern;

        /**
         * Creates a plain object from a ChordPattern message. Also converts values to other types if specified.
         * @param message ChordPattern
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chords.ChordPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChordPattern to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuitarChord. */
    interface IGuitarChord {

        /** GuitarChord id */
        id?: (string|null);

        /** GuitarChord name */
        name?: (string|null);

        /** GuitarChord complexity */
        complexity?: (number|null);

        /** GuitarChord chordPattern */
        chordPattern?: (chords.IChordPattern|null);

        /** GuitarChord complexityRank */
        complexityRank?: (number|null);
    }

    /** Represents a GuitarChord. */
    class GuitarChord implements IGuitarChord {

        /**
         * Constructs a new GuitarChord.
         * @param [properties] Properties to set
         */
        constructor(properties?: chords.IGuitarChord);

        /** GuitarChord id. */
        public id: string;

        /** GuitarChord name. */
        public name: string;

        /** GuitarChord complexity. */
        public complexity: number;

        /** GuitarChord chordPattern. */
        public chordPattern?: (chords.IChordPattern|null);

        /** GuitarChord complexityRank. */
        public complexityRank: number;

        /**
         * Creates a new GuitarChord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuitarChord instance
         */
        public static create(properties?: chords.IGuitarChord): chords.GuitarChord;

        /**
         * Encodes the specified GuitarChord message. Does not implicitly {@link chords.GuitarChord.verify|verify} messages.
         * @param message GuitarChord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chords.IGuitarChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuitarChord message, length delimited. Does not implicitly {@link chords.GuitarChord.verify|verify} messages.
         * @param message GuitarChord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chords.IGuitarChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuitarChord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuitarChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chords.GuitarChord;

        /**
         * Decodes a GuitarChord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuitarChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chords.GuitarChord;

        /**
         * Verifies a GuitarChord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuitarChord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuitarChord
         */
        public static fromObject(object: { [k: string]: any }): chords.GuitarChord;

        /**
         * Creates a plain object from a GuitarChord message. Also converts values to other types if specified.
         * @param message GuitarChord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chords.GuitarChord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuitarChord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuitarChords. */
    interface IGuitarChords {

        /** GuitarChords chords */
        chords?: (chords.IGuitarChord[]|null);
    }

    /** Represents a GuitarChords. */
    class GuitarChords implements IGuitarChords {

        /**
         * Constructs a new GuitarChords.
         * @param [properties] Properties to set
         */
        constructor(properties?: chords.IGuitarChords);

        /** GuitarChords chords. */
        public chords: chords.IGuitarChord[];

        /**
         * Creates a new GuitarChords instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuitarChords instance
         */
        public static create(properties?: chords.IGuitarChords): chords.GuitarChords;

        /**
         * Encodes the specified GuitarChords message. Does not implicitly {@link chords.GuitarChords.verify|verify} messages.
         * @param message GuitarChords message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chords.IGuitarChords, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuitarChords message, length delimited. Does not implicitly {@link chords.GuitarChords.verify|verify} messages.
         * @param message GuitarChords message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chords.IGuitarChords, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuitarChords message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuitarChords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chords.GuitarChords;

        /**
         * Decodes a GuitarChords message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuitarChords
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chords.GuitarChords;

        /**
         * Verifies a GuitarChords message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuitarChords message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuitarChords
         */
        public static fromObject(object: { [k: string]: any }): chords.GuitarChords;

        /**
         * Creates a plain object from a GuitarChords message. Also converts values to other types if specified.
         * @param message GuitarChords
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chords.GuitarChords, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuitarChords to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SongChord. */
    interface ISongChord {

        /** SongChord id */
        id?: (string|null);

        /** SongChord name */
        name?: (string|null);

        /** SongChord guitarChord */
        guitarChord?: (chords.IGuitarChord|null);
    }

    /** Represents a SongChord. */
    class SongChord implements ISongChord {

        /**
         * Constructs a new SongChord.
         * @param [properties] Properties to set
         */
        constructor(properties?: chords.ISongChord);

        /** SongChord id. */
        public id: string;

        /** SongChord name. */
        public name: string;

        /** SongChord guitarChord. */
        public guitarChord?: (chords.IGuitarChord|null);

        /**
         * Creates a new SongChord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SongChord instance
         */
        public static create(properties?: chords.ISongChord): chords.SongChord;

        /**
         * Encodes the specified SongChord message. Does not implicitly {@link chords.SongChord.verify|verify} messages.
         * @param message SongChord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chords.ISongChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SongChord message, length delimited. Does not implicitly {@link chords.SongChord.verify|verify} messages.
         * @param message SongChord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chords.ISongChord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SongChord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SongChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chords.SongChord;

        /**
         * Decodes a SongChord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SongChord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chords.SongChord;

        /**
         * Verifies a SongChord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SongChord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SongChord
         */
        public static fromObject(object: { [k: string]: any }): chords.SongChord;

        /**
         * Creates a plain object from a SongChord message. Also converts values to other types if specified.
         * @param message SongChord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chords.SongChord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SongChord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
