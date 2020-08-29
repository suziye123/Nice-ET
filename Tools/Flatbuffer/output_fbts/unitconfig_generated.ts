// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @constructor
 */
export namespace fb{
export class unitconfigTB {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns unitconfigTB
 */
__init(i:number, bb:flatbuffers.ByteBuffer):unitconfigTB {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param unitconfigTB= obj
 * @returns unitconfigTB
 */
static getRootAsunitconfigTB(bb:flatbuffers.ByteBuffer, obj?:unitconfigTB):unitconfigTB {
  return (obj || new unitconfigTB()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param unitconfigTB= obj
 * @returns unitconfigTB
 */
static getSizePrefixedRootAsunitconfigTB(bb:flatbuffers.ByteBuffer, obj?:unitconfigTB):unitconfigTB {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new unitconfigTB()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param number index
 * @param fb.unitconfigTR= obj
 * @returns fb.unitconfigTR
 */
unitconfigTRS(index: number, obj?:fb.unitconfigTR):fb.unitconfigTR|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new fb.unitconfigTR()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
unitconfigTRSLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Builder builder
 */
static startunitconfigTB(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset unitconfigTRSOffset
 */
static addUnitconfigTRS(builder:flatbuffers.Builder, unitconfigTRSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, unitconfigTRSOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createUnitconfigTRSVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startUnitconfigTRSVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endunitconfigTB(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishunitconfigTBBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishSizePrefixedunitconfigTBBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
};

static createunitconfigTB(builder:flatbuffers.Builder, unitconfigTRSOffset:flatbuffers.Offset):flatbuffers.Offset {
  unitconfigTB.startunitconfigTB(builder);
  unitconfigTB.addUnitconfigTRS(builder, unitconfigTRSOffset);
  return unitconfigTB.endunitconfigTB(builder);
}
}
}
/**
 * @constructor
 */
export namespace fb{
export class unitconfigTR {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns unitconfigTR
 */
__init(i:number, bb:flatbuffers.ByteBuffer):unitconfigTR {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param unitconfigTR= obj
 * @returns unitconfigTR
 */
static getRootAsunitconfigTR(bb:flatbuffers.ByteBuffer, obj?:unitconfigTR):unitconfigTR {
  return (obj || new unitconfigTR()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param unitconfigTR= obj
 * @returns unitconfigTR
 */
static getSizePrefixedRootAsunitconfigTR(bb:flatbuffers.ByteBuffer, obj?:unitconfigTR):unitconfigTR {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new unitconfigTR()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
Id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
Name():string|null
Name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
Name(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
Desc():string|null
Desc(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
Desc(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns number
 */
Position():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
Height():number {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
Weight():number {
  var offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Builder builder
 */
static startunitconfigTR(builder:flatbuffers.Builder) {
  builder.startObject(6);
};

/**
 * @param flatbuffers.Builder builder
 * @param number Id
 */
static add_id(builder:flatbuffers.Builder, Id:number) {
  builder.addFieldInt32(0, Id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset NameOffset
 */
static add_name(builder:flatbuffers.Builder, NameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, NameOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset DescOffset
 */
static add_desc(builder:flatbuffers.Builder, DescOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, DescOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number Position
 */
static add_position(builder:flatbuffers.Builder, Position:number) {
  builder.addFieldInt32(3, Position, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number Height
 */
static add_height(builder:flatbuffers.Builder, Height:number) {
  builder.addFieldInt32(4, Height, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number Weight
 */
static add_weight(builder:flatbuffers.Builder, Weight:number) {
  builder.addFieldInt32(5, Weight, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endunitconfigTR(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static createunitconfigTR(builder:flatbuffers.Builder, Id:number, NameOffset:flatbuffers.Offset, DescOffset:flatbuffers.Offset, Position:number, Height:number, Weight:number):flatbuffers.Offset {
  unitconfigTR.startunitconfigTR(builder);
  unitconfigTR.add_id(builder, Id);
  unitconfigTR.add_name(builder, NameOffset);
  unitconfigTR.add_desc(builder, DescOffset);
  unitconfigTR.add_position(builder, Position);
  unitconfigTR.add_height(builder, Height);
  unitconfigTR.add_weight(builder, Weight);
  return unitconfigTR.endunitconfigTR(builder);
}
}
}
