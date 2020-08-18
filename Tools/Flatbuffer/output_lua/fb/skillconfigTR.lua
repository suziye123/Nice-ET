-- automatically generated by the FlatBuffers compiler, do not modify

-- namespace: fb

local flatbuffers = require('flatbuffers')

local skillconfigTR = {} -- the module
local skillconfigTR_mt = {} -- the class metatable

function skillconfigTR.New()
    local o = {}
    setmetatable(o, {__index = skillconfigTR_mt})
    return o
end
function skillconfigTR.GetRootAsskillconfigTR(buf, offset)
    local n = flatbuffers.N.UOffsetT:Unpack(buf, offset)
    local o = skillconfigTR.New()
    o:Init(buf, n + offset)
    return o
end
function skillconfigTR_mt:Init(buf, pos)
    self.view = flatbuffers.view.New(buf, pos)
end
function skillconfigTR_mt:_id()
    local o = self.view:Offset(4)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Int32, o + self.view.pos)
    end
    return 0
end
function skillconfigTR_mt:Name()
    local o = self.view:Offset(6)
    if o ~= 0 then
        return self.view:String(o + self.view.pos)
    end
end
function skillconfigTR_mt:Description()
    local o = self.view:Offset(8)
    if o ~= 0 then
        return self.view:String(o + self.view.pos)
    end
end
function skillconfigTR_mt:Cooltime()
    local o = self.view:Offset(10)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Int32, o + self.view.pos)
    end
    return 0
end
function skillconfigTR_mt:Costsp()
    local o = self.view:Offset(12)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Int32, o + self.view.pos)
    end
    return 0
end
function skillconfigTR_mt:Attackdistance()
    local o = self.view:Offset(14)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Float32, o + self.view.pos)
    end
    return 0.0
end
function skillconfigTR_mt:Attackangle()
    local o = self.view:Offset(16)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Float32, o + self.view.pos)
    end
    return 0.0
end
function skillconfigTR_mt:Attacktargettags(j)
    local o = self.view:Offset(18)
    if o ~= 0 then
        local a = self.view:Vector(o)
        return self.view:String(a + ((j-1) * 4))
    end
    return ''
end
function skillconfigTR_mt:AttacktargettagsLength()
    local o = self.view:Offset(18)
    if o ~= 0 then
        return self.view:VectorLen(o)
    end
    return 0
end
function skillconfigTR_mt:Impacttype(j)
    local o = self.view:Offset(20)
    if o ~= 0 then
        local a = self.view:Vector(o)
        return self.view:String(a + ((j-1) * 4))
    end
    return ''
end
function skillconfigTR_mt:ImpacttypeLength()
    local o = self.view:Offset(20)
    if o ~= 0 then
        return self.view:VectorLen(o)
    end
    return 0
end
function skillconfigTR_mt:Nextbattlerid()
    local o = self.view:Offset(22)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Int32, o + self.view.pos)
    end
    return 0
end
function skillconfigTR_mt:Atkratio()
    local o = self.view:Offset(24)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Float32, o + self.view.pos)
    end
    return 0.0
end
function skillconfigTR_mt:Durationtime()
    local o = self.view:Offset(26)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Float32, o + self.view.pos)
    end
    return 0.0
end
function skillconfigTR_mt:Atkinterval()
    local o = self.view:Offset(28)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Float32, o + self.view.pos)
    end
    return 0.0
end
function skillconfigTR_mt:Skillprefab()
    local o = self.view:Offset(30)
    if o ~= 0 then
        return self.view:String(o + self.view.pos)
    end
end
function skillconfigTR_mt:Animationname()
    local o = self.view:Offset(32)
    if o ~= 0 then
        return self.view:String(o + self.view.pos)
    end
end
function skillconfigTR_mt:Hitfxprefab()
    local o = self.view:Offset(34)
    if o ~= 0 then
        return self.view:String(o + self.view.pos)
    end
end
function skillconfigTR_mt:Level()
    local o = self.view:Offset(36)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Int32, o + self.view.pos)
    end
    return 0
end
function skillconfigTR_mt:Attacktype()
    local o = self.view:Offset(38)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Int32, o + self.view.pos)
    end
    return 0
end
function skillconfigTR_mt:Selectortype()
    local o = self.view:Offset(40)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Int32, o + self.view.pos)
    end
    return 0
end
function skillconfigTR.Start(builder) builder:StartObject(19) end
function skillconfigTR.Add_id(builder, Id) builder:PrependInt32Slot(0, Id, 0) end
function skillconfigTR.AddName(builder, name) builder:PrependUOffsetTRelativeSlot(1, name, 0) end
function skillconfigTR.AddDescription(builder, description) builder:PrependUOffsetTRelativeSlot(2, description, 0) end
function skillconfigTR.AddCooltime(builder, cooltime) builder:PrependInt32Slot(3, cooltime, 0) end
function skillconfigTR.AddCostsp(builder, costsp) builder:PrependInt32Slot(4, costsp, 0) end
function skillconfigTR.AddAttackdistance(builder, attackdistance) builder:PrependFloat32Slot(5, attackdistance, 0.0) end
function skillconfigTR.AddAttackangle(builder, attackangle) builder:PrependFloat32Slot(6, attackangle, 0.0) end
function skillconfigTR.AddAttacktargettags(builder, attacktargettags) builder:PrependUOffsetTRelativeSlot(7, attacktargettags, 0) end
function skillconfigTR.StartAttacktargettagsVector(builder, numElems) return builder:StartVector(4, numElems, 4) end
function skillconfigTR.AddImpacttype(builder, impacttype) builder:PrependUOffsetTRelativeSlot(8, impacttype, 0) end
function skillconfigTR.StartImpacttypeVector(builder, numElems) return builder:StartVector(4, numElems, 4) end
function skillconfigTR.AddNextbattlerid(builder, nextbattlerid) builder:PrependInt32Slot(9, nextbattlerid, 0) end
function skillconfigTR.AddAtkratio(builder, atkratio) builder:PrependFloat32Slot(10, atkratio, 0.0) end
function skillconfigTR.AddDurationtime(builder, durationtime) builder:PrependFloat32Slot(11, durationtime, 0.0) end
function skillconfigTR.AddAtkinterval(builder, atkinterval) builder:PrependFloat32Slot(12, atkinterval, 0.0) end
function skillconfigTR.AddSkillprefab(builder, skillprefab) builder:PrependUOffsetTRelativeSlot(13, skillprefab, 0) end
function skillconfigTR.AddAnimationname(builder, animationname) builder:PrependUOffsetTRelativeSlot(14, animationname, 0) end
function skillconfigTR.AddHitfxprefab(builder, hitfxprefab) builder:PrependUOffsetTRelativeSlot(15, hitfxprefab, 0) end
function skillconfigTR.AddLevel(builder, level) builder:PrependInt32Slot(16, level, 0) end
function skillconfigTR.AddAttacktype(builder, attacktype) builder:PrependInt32Slot(17, attacktype, 0) end
function skillconfigTR.AddSelectortype(builder, selectortype) builder:PrependInt32Slot(18, selectortype, 0) end
function skillconfigTR.End(builder) return builder:EndObject() end

return skillconfigTR -- return the module