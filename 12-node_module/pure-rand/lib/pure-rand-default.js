"use strict";
exports.__esModule = true;
exports.unsafeUniformIntDistribution = exports.unsafeUniformBigIntDistribution = exports.unsafeUniformArrayIntDistribution = exports.uniformIntDistribution = exports.uniformBigIntDistribution = exports.uniformArrayIntDistribution = exports.xoroshiro128plus = exports.xorshift128plus = exports.mersenne = exports.congruential32 = exports.unsafeSkipN = exports.unsafeGenerateN = exports.skipN = exports.generateN = exports.__commitHash = exports.__version = exports.__type = void 0;
var RandomGenerator_1 = require("./generator/RandomGenerator");
exports.generateN = RandomGenerator_1.generateN;
exports.skipN = RandomGenerator_1.skipN;
exports.unsafeGenerateN = RandomGenerator_1.unsafeGenerateN;
exports.unsafeSkipN = RandomGenerator_1.unsafeSkipN;
var LinearCongruential_1 = require("./generator/LinearCongruential");
exports.congruential32 = LinearCongruential_1.congruential32;
var MersenneTwister_1 = require("./generator/MersenneTwister");
exports.mersenne = MersenneTwister_1["default"];
var XorShift_1 = require("./generator/XorShift");
exports.xorshift128plus = XorShift_1.xorshift128plus;
var XoroShiro_1 = require("./generator/XoroShiro");
exports.xoroshiro128plus = XoroShiro_1.xoroshiro128plus;
var UniformArrayIntDistribution_1 = require("./distribution/UniformArrayIntDistribution");
exports.uniformArrayIntDistribution = UniformArrayIntDistribution_1.uniformArrayIntDistribution;
var UniformBigIntDistribution_1 = require("./distribution/UniformBigIntDistribution");
exports.uniformBigIntDistribution = UniformBigIntDistribution_1.uniformBigIntDistribution;
var UniformIntDistribution_1 = require("./distribution/UniformIntDistribution");
exports.uniformIntDistribution = UniformIntDistribution_1.uniformIntDistribution;
var UnsafeUniformArrayIntDistribution_1 = require("./distribution/UnsafeUniformArrayIntDistribution");
exports.unsafeUniformArrayIntDistribution = UnsafeUniformArrayIntDistribution_1.unsafeUniformArrayIntDistribution;
var UnsafeUniformBigIntDistribution_1 = require("./distribution/UnsafeUniformBigIntDistribution");
exports.unsafeUniformBigIntDistribution = UnsafeUniformBigIntDistribution_1.unsafeUniformBigIntDistribution;
var UnsafeUniformIntDistribution_1 = require("./distribution/UnsafeUniformIntDistribution");
exports.unsafeUniformIntDistribution = UnsafeUniformIntDistribution_1.unsafeUniformIntDistribution;
var __type = 'commonjs';
exports.__type = __type;
var __version = '6.0.4';
exports.__version = __version;
var __commitHash = 'bcf9517d53f733a335e678fbba321780c0543b29';
exports.__commitHash = __commitHash;
