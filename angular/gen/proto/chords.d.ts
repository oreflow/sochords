import * as $protobuf from "protobufjs";
/** Namespace chords. */
export namespace chords {

    /** Properties of a GuitarChord. */
    interface IGuitarChord {

        /** GuitarChord frets */
        frets?: (number[]|null);

        /** GuitarChord hasMutedStrings */
        hasMutedStrings?: (boolean|null);
    }

    /** Represents a GuitarChord. */
    class GuitarChord implements IGuitarChord {

        /**
         * Constructs a new GuitarChord.
         * @param [properties] Properties to set
         */
        constructor(properties?: chords.IGuitarChord);

        /** GuitarChord frets. */
        public frets: number[];

        /** GuitarChord hasMutedStrings. */
        public hasMutedStrings: boolean;

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
}
