// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @constructor
 */
export namespace fb{
export class heroconfigTB {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns heroconfigTB
 */
__init(i:number, bb:flatbuffers.ByteBuffer):heroconfigTB {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param heroconfigTB= obj
 * @returns heroconfigTB
 */
static getRootAsheroconfigTB(bb:flatbuffers.ByteBuffer, obj?:heroconfigTB):heroconfigTB {
  return (obj || new heroconfigTB()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param heroconfigTB= obj
 * @returns heroconfigTB
 */
static getSizePrefixedRootAsheroconfigTB(bb:flatbuffers.ByteBuffer, obj?:heroconfigTB):heroconfigTB {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new heroconfigTB()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param number index
 * @param fb.heroconfigTR= obj
 * @returns fb.heroconfigTR
 */
heroconfigTRS(index: number, obj?:fb.heroconfigTR):fb.heroconfigTR|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new fb.heroconfigTR()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
heroconfigTRSLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Builder builder
 */
static startheroconfigTB(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset heroconfigTRSOffset
 */
static addHeroconfigTRS(builder:flatbuffers.Builder, heroconfigTRSOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, heroconfigTRSOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createHeroconfigTRSVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
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
static startHeroconfigTRSVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endheroconfigTB(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishheroconfigTBBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishSizePrefixedheroconfigTBBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset, undefined, true);
};

static createheroconfigTB(builder:flatbuffers.Builder, heroconfigTRSOffset:flatbuffers.Offset):flatbuffers.Offset {
  heroconfigTB.startheroconfigTB(builder);
  heroconfigTB.addHeroconfigTRS(builder, heroconfigTRSOffset);
  return heroconfigTB.endheroconfigTB(builder);
}
}
}
/**
 * @constructor
 */
export namespace fb{
export class heroconfigTR {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns heroconfigTR
 */
__init(i:number, bb:flatbuffers.ByteBuffer):heroconfigTR {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param heroconfigTR= obj
 * @returns heroconfigTR
 */
static getRootAsheroconfigTR(bb:flatbuffers.ByteBuffer, obj?:heroconfigTR):heroconfigTR {
  return (obj || new heroconfigTR()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param heroconfigTR= obj
 * @returns heroconfigTR
 */
static getSizePrefixedRootAsheroconfigTR(bb:flatbuffers.ByteBuffer, obj?:heroconfigTR):heroconfigTR {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new heroconfigTR()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
Id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readInt32(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
Baseatk():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
Sp():number {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
Hp():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
Attackdistance():number {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @returns number
 */
Attackinterval():number {
  var offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readFloat32(this.bb_pos + offset) : 0.0;
};

/**
 * @param flatbuffers.Builder builder
 */
static startheroconfigTR(builder:flatbuffers.Builder) {
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
 * @param number Baseatk
 */
static add_baseatk(builder:flatbuffers.Builder, Baseatk:number) {
  builder.addFieldFloat32(1, Baseatk, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number Sp
 */
static add_sp(builder:flatbuffers.Builder, Sp:number) {
  builder.addFieldFloat32(2, Sp, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number Hp
 */
static add_hp(builder:flatbuffers.Builder, Hp:number) {
  builder.addFieldFloat32(3, Hp, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number Attackdistance
 */
static add_attackdistance(builder:flatbuffers.Builder, Attackdistance:number) {
  builder.addFieldFloat32(4, Attackdistance, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @param number Attackinterval
 */
static add_attackinterval(builder:flatbuffers.Builder, Attackinterval:number) {
  builder.addFieldFloat32(5, Attackinterval, 0.0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endheroconfigTR(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static createheroconfigTR(builder:flatbuffers.Builder, Id:number, Baseatk:number, Sp:number, Hp:number, Attackdistance:number, Attackinterval:number):flatbuffers.Offset {
  heroconfigTR.startheroconfigTR(builder);
  heroconfigTR.add_id(builder, Id);
  heroconfigTR.add_baseatk(builder, Baseatk);
  heroconfigTR.add_sp(builder, Sp);
  heroconfigTR.add_hp(builder, Hp);
  heroconfigTR.add_attackdistance(builder, Attackdistance);
  heroconfigTR.add_attackinterval(builder, Attackinterval);
  return heroconfigTR.endheroconfigTR(builder);
}
}
}
