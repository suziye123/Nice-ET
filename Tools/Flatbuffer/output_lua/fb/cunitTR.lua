-- automatically generated by the FlatBuffers compiler, do not modify

-- namespace: fb

local flatbuffers = require('flatbuffers')

local cunitTR = {} -- the module
local cunitTR_mt = {} -- the class metatable

function cunitTR.New()
    local o = {}
    setmetatable(o, {__index = cunitTR_mt})
    return o
end
function cunitTR.GetRootAscunitTR(buf, offset)
    local n = flatbuffers.N.UOffsetT:Unpack(buf, offset)
    local o = cunitTR.New()
    o:Init(buf, n + offset)
    return o
end
function cunitTR_mt:Init(buf, pos)
    self.view = flatbuffers.view.New(buf, pos)
end
function cunitTR_mt:_id()
    local o = self.view:Offset(4)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Int32, o + self.view.pos)
    end
    return 0
end
function cunitTR_mt:Baseatk()
    local o = self.view:Offset(6)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Float32, o + self.view.pos)
    end
    return 0.0
end
function cunitTR_mt:Sp()
    local o = self.view:Offset(8)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Float32, o + self.view.pos)
    end
    return 0.0
end
function cunitTR_mt:Hp()
    local o = self.view:Offset(10)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Float32, o + self.view.pos)
    end
    return 0.0
end
function cunitTR_mt:Attackdistance()
    local o = self.view:Offset(12)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Float32, o + self.view.pos)
    end
    return 0.0
end
function cunitTR_mt:Attackinterval()
    local o = self.view:Offset(14)
    if o ~= 0 then
        return self.view:Get(flatbuffers.N.Float32, o + self.view.pos)
    end
    return 0.0
end
function cunitTR.Start(builder) builder:StartObject(6) end
function cunitTR.Add_id(builder, Id) builder:PrependInt32Slot(0, Id, 0) end
function cunitTR.AddBaseatk(builder, baseatk) builder:PrependFloat32Slot(1, baseatk, 0.0) end
function cunitTR.AddSp(builder, sp) builder:PrependFloat32Slot(2, sp, 0.0) end
function cunitTR.AddHp(builder, hp) builder:PrependFloat32Slot(3, hp, 0.0) end
function cunitTR.AddAttackdistance(builder, attackdistance) builder:PrependFloat32Slot(4, attackdistance, 0.0) end
function cunitTR.AddAttackinterval(builder, attackinterval) builder:PrependFloat32Slot(5, attackinterval, 0.0) end
function cunitTR.End(builder) return builder:EndObject() end

return cunitTR -- return the module