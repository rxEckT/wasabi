/*
 * Auto-generated from WASM module to-analyze.
 * DO NOT EDIT.
 */

const moduleInfo = {
  "functions": [
    {
      "type": {
        "params": [],
        "results": []
      },
      "import": null,
      "export": null,
      "locals": [],
      "instrCount": 11
    }
  ],
  "globals": [],
  "table_export_name": "",
  "br_tables": []
};

const lowlevelHooks = {
    // trivial
    nop: function (func, instr) {
        nop({func, instr});
    },
    unreachable: function (func, instr) {
        unreachable({func, instr});
    },

    // memory
    current_memory: function (func, instr, currentSizePages) {
        current_memory({func, instr}, currentSizePages);
    },
    grow_memory: function (func, instr, byPages, previousSizePages) {
        grow_memory({func, instr}, byPages, previousSizePages);
    },

    // begin/ends
    begin_function: function (func, instr) {
        begin({func, instr}, "function");
    },
    end_function: function (func, instr) {
        end({func, instr}, "function", {func, instr: -1});
    },
    begin_block: function (func, instr) {
        begin({func, instr}, "block");
    },
    end_block: function (func, instr, begin_instr) {
        end({func, instr}, "block", {func, instr: begin_instr});
    },
    begin_loop: function (func, instr) {
        begin({func, instr}, "loop");
    },
    end_loop: function (func, instr, begin_instr) {
        end({func, instr}, "loop", {func, instr: begin_instr});
    },
    begin_if: function (func, instr) {
        begin({func, instr}, "if");
    },
    end_if: function (func, instr, begin_instr) {
        end({func, instr}, "if", {func, instr: begin_instr});
    },
    begin_else: function (func, instr) {
        begin({func, instr}, "else");
    },
    end_else: function (func, instr, begin_instr) {
        end({func, instr}, "else", {func, instr: begin_instr});
    },

    // branches/if condition
    if_: function (func, instr, condition) {
        if_({func, instr}, condition === 1);
    },
    br: function (func, instr, target_label, target_instr) {
        br({func, instr}, {label: target_label, location: {func, instr: target_instr}});
    },
    br_if: function (func, instr, target_label, target_instr, condition) {
        br_if({func, instr}, {label: target_label, location: {func, instr: target_instr}}, condition === 1);
    },
    br_table: function (func, instr, br_table_info_idx, table_idx) {
        br_table({
            func,
            instr
        }, moduleInfo.br_tables[br_table_info_idx].table, moduleInfo.br_tables[br_table_info_idx].default, table_idx);
    },

    // generated:
    return_: function(func, instr) {
        return_({func, instr}, []);
    },
    call_result_: function(func, instr) {
        call_result_({func, instr}, []);
    },
    get_local_i32: function(func, instr, index, v) {
        local({func, instr}, "get", index, v);
    },
    get_local_i64: function(func, instr, index, v_low, v_high) {
        local({func, instr}, "get", index, new Long(v_low, v_high));
    },
    get_local_f32: function(func, instr, index, v) {
        local({func, instr}, "get", index, v);
    },
    get_local_f64: function(func, instr, index, v) {
        local({func, instr}, "get", index, v);
    },
    set_local_i32: function(func, instr, index, v) {
        local({func, instr}, "set", index, v);
    },
    set_local_i64: function(func, instr, index, v_low, v_high) {
        local({func, instr}, "set", index, new Long(v_low, v_high));
    },
    set_local_f32: function(func, instr, index, v) {
        local({func, instr}, "set", index, v);
    },
    set_local_f64: function(func, instr, index, v) {
        local({func, instr}, "set", index, v);
    },
    tee_local_i32: function(func, instr, index, v) {
        local({func, instr}, "tee", index, v);
    },
    tee_local_i64: function(func, instr, index, v_low, v_high) {
        local({func, instr}, "tee", index, new Long(v_low, v_high));
    },
    tee_local_f32: function(func, instr, index, v) {
        local({func, instr}, "tee", index, v);
    },
    tee_local_f64: function(func, instr, index, v) {
        local({func, instr}, "tee", index, v);
    },
    get_global_i32: function(func, instr, index, v) {
        global({func, instr}, "get", index, v);
    },
    get_global_i64: function(func, instr, index, v_low, v_high) {
        global({func, instr}, "get", index, new Long(v_low, v_high));
    },
    get_global_f32: function(func, instr, index, v) {
        global({func, instr}, "get", index, v);
    },
    get_global_f64: function(func, instr, index, v) {
        global({func, instr}, "get", index, v);
    },
    set_global_i32: function(func, instr, index, v) {
        global({func, instr}, "set", index, v);
    },
    set_global_i64: function(func, instr, index, v_low, v_high) {
        global({func, instr}, "set", index, new Long(v_low, v_high));
    },
    set_global_f32: function(func, instr, index, v) {
        global({func, instr}, "set", index, v);
    },
    set_global_f64: function(func, instr, index, v) {
        global({func, instr}, "set", index, v);
    },
    drop_i32: function(func, instr, v) {
        drop({func, instr}, v);
    },
    drop_i64: function(func, instr, v_low, v_high) {
        drop({func, instr}, new Long(v_low, v_high));
    },
    drop_f32: function(func, instr, v) {
        drop({func, instr}, v);
    },
    drop_f64: function(func, instr, v) {
        drop({func, instr}, v);
    },
    select_i32_i32: function(func, instr, condition, first, second) {
        select({func, instr}, condition === 1, first, second);
    },
    select_i64_i64: function(func, instr, condition, first_low, first_high, second_low, second_high) {
        select({func, instr}, condition === 1, new Long(first_low, first_high), new Long(second_low, second_high));
    },
    select_f32_f32: function(func, instr, condition, first, second) {
        select({func, instr}, condition === 1, first, second);
    },
    select_f64_f64: function(func, instr, condition, first, second) {
        select({func, instr}, condition === 1, first, second);
    },
    call_: function(func, instr, targetFunc) {
        call_({func, instr}, targetFunc, false, []);
    },
    call_indirect_: function(func, instr, targetTableIdx) {
        call_({func, instr}, resolveTableIdx(targetTableIdx), true, []);
    },
    i32_const: function (func, instr, v) {
        const_({func, instr}, v);
    },
    i64_const: function (func, instr, v_low, v_high) {
        const_({func, instr}, new Long(v_low, v_high));
    },
    f32_const: function (func, instr, v) {
        const_({func, instr}, v);
    },
    f64_const: function (func, instr, v) {
        const_({func, instr}, v);
    },
    i32_eqz: function (func, instr, input, result) {
        unary({func, instr}, "i32_eqz", input, result);
    },
    i64_eqz: function (func, instr, input_low, input_high, result) {
        unary({func, instr}, "i64_eqz", new Long(input_low, input_high), result);
    },
    i32_clz: function (func, instr, input, result) {
        unary({func, instr}, "i32_clz", input, result);
    },
    i32_ctz: function (func, instr, input, result) {
        unary({func, instr}, "i32_ctz", input, result);
    },
    i32_popcnt: function (func, instr, input, result) {
        unary({func, instr}, "i32_popcnt", input, result);
    },
    i64_clz: function (func, instr, input_low, input_high, result_low, result_high) {
        unary({func, instr}, "i64_clz", new Long(input_low, input_high), new Long(result_low, result_high));
    },
    i64_ctz: function (func, instr, input_low, input_high, result_low, result_high) {
        unary({func, instr}, "i64_ctz", new Long(input_low, input_high), new Long(result_low, result_high));
    },
    i64_popcnt: function (func, instr, input_low, input_high, result_low, result_high) {
        unary({func, instr}, "i64_popcnt", new Long(input_low, input_high), new Long(result_low, result_high));
    },
    f32_abs: function (func, instr, input, result) {
        unary({func, instr}, "f32_abs", input, result);
    },
    f32_neg: function (func, instr, input, result) {
        unary({func, instr}, "f32_neg", input, result);
    },
    f32_ceil: function (func, instr, input, result) {
        unary({func, instr}, "f32_ceil", input, result);
    },
    f32_floor: function (func, instr, input, result) {
        unary({func, instr}, "f32_floor", input, result);
    },
    f32_trunc: function (func, instr, input, result) {
        unary({func, instr}, "f32_trunc", input, result);
    },
    f32_nearest: function (func, instr, input, result) {
        unary({func, instr}, "f32_nearest", input, result);
    },
    f32_sqrt: function (func, instr, input, result) {
        unary({func, instr}, "f32_sqrt", input, result);
    },
    f64_abs: function (func, instr, input, result) {
        unary({func, instr}, "f64_abs", input, result);
    },
    f64_neg: function (func, instr, input, result) {
        unary({func, instr}, "f64_neg", input, result);
    },
    f64_ceil: function (func, instr, input, result) {
        unary({func, instr}, "f64_ceil", input, result);
    },
    f64_floor: function (func, instr, input, result) {
        unary({func, instr}, "f64_floor", input, result);
    },
    f64_trunc: function (func, instr, input, result) {
        unary({func, instr}, "f64_trunc", input, result);
    },
    f64_nearest: function (func, instr, input, result) {
        unary({func, instr}, "f64_nearest", input, result);
    },
    f64_sqrt: function (func, instr, input, result) {
        unary({func, instr}, "f64_sqrt", input, result);
    },
    i32_wrap_i64: function (func, instr, input_low, input_high, result) {
        unary({func, instr}, "i32_wrap_i64", new Long(input_low, input_high), result);
    },
    i32_trunc_s_f32: function (func, instr, input, result) {
        unary({func, instr}, "i32_trunc_s_f32", input, result);
    },
    i32_trunc_u_f32: function (func, instr, input, result) {
        unary({func, instr}, "i32_trunc_u_f32", input, result);
    },
    i32_trunc_s_f64: function (func, instr, input, result) {
        unary({func, instr}, "i32_trunc_s_f64", input, result);
    },
    i32_trunc_u_f64: function (func, instr, input, result) {
        unary({func, instr}, "i32_trunc_u_f64", input, result);
    },
    i64_extend_s_i32: function (func, instr, input, result_low, result_high) {
        unary({func, instr}, "i64_extend_s_i32", input, new Long(result_low, result_high));
    },
    i64_extend_u_i32: function (func, instr, input, result_low, result_high) {
        unary({func, instr}, "i64_extend_u_i32", input, new Long(result_low, result_high));
    },
    i64_trunc_s_f32: function (func, instr, input, result_low, result_high) {
        unary({func, instr}, "i64_trunc_s_f32", input, new Long(result_low, result_high));
    },
    i64_trunc_u_f32: function (func, instr, input, result_low, result_high) {
        unary({func, instr}, "i64_trunc_u_f32", input, new Long(result_low, result_high));
    },
    i64_trunc_s_f64: function (func, instr, input, result_low, result_high) {
        unary({func, instr}, "i64_trunc_s_f64", input, new Long(result_low, result_high));
    },
    i64_trunc_u_f64: function (func, instr, input, result_low, result_high) {
        unary({func, instr}, "i64_trunc_u_f64", input, new Long(result_low, result_high));
    },
    f32_convert_s_i32: function (func, instr, input, result) {
        unary({func, instr}, "f32_convert_s_i32", input, result);
    },
    f32_convert_u_i32: function (func, instr, input, result) {
        unary({func, instr}, "f32_convert_u_i32", input, result);
    },
    f32_convert_s_i64: function (func, instr, input_low, input_high, result) {
        unary({func, instr}, "f32_convert_s_i64", new Long(input_low, input_high), result);
    },
    f32_convert_u_i64: function (func, instr, input_low, input_high, result) {
        unary({func, instr}, "f32_convert_u_i64", new Long(input_low, input_high), result);
    },
    f32_demote_f64: function (func, instr, input, result) {
        unary({func, instr}, "f32_demote_f64", input, result);
    },
    f64_convert_s_i32: function (func, instr, input, result) {
        unary({func, instr}, "f64_convert_s_i32", input, result);
    },
    f64_convert_u_i32: function (func, instr, input, result) {
        unary({func, instr}, "f64_convert_u_i32", input, result);
    },
    f64_convert_s_i64: function (func, instr, input_low, input_high, result) {
        unary({func, instr}, "f64_convert_s_i64", new Long(input_low, input_high), result);
    },
    f64_convert_u_i64: function (func, instr, input_low, input_high, result) {
        unary({func, instr}, "f64_convert_u_i64", new Long(input_low, input_high), result);
    },
    f64_promote_f32: function (func, instr, input, result) {
        unary({func, instr}, "f64_promote_f32", input, result);
    },
    i32_reinterpret_f32: function (func, instr, input, result) {
        unary({func, instr}, "i32_reinterpret_f32", input, result);
    },
    i64_reinterpret_f64: function (func, instr, input, result_low, result_high) {
        unary({func, instr}, "i64_reinterpret_f64", input, new Long(result_low, result_high));
    },
    f32_reinterpret_i32: function (func, instr, input, result) {
        unary({func, instr}, "f32_reinterpret_i32", input, result);
    },
    f64_reinterpret_i64: function (func, instr, input_low, input_high, result) {
        unary({func, instr}, "f64_reinterpret_i64", new Long(input_low, input_high), result);
    },
    i32_eq: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_eq", first, second, result);
    },
    i32_ne: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_ne", first, second, result);
    },
    i32_lt_s: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_lt_s", first, second, result);
    },
    i32_lt_u: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_lt_u", first, second, result);
    },
    i32_gt_s: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_gt_s", first, second, result);
    },
    i32_gt_u: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_gt_u", first, second, result);
    },
    i32_le_s: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_le_s", first, second, result);
    },
    i32_le_u: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_le_u", first, second, result);
    },
    i32_ge_s: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_ge_s", first, second, result);
    },
    i32_ge_u: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_ge_u", first, second, result);
    },
    i64_eq: function (func, instr, first_low, first_high, second_low, second_high, result) {
        binary({func, instr}, "i64_eq", new Long(first_low, first_high), new Long(second_low, second_high), result);
    },
    i64_ne: function (func, instr, first_low, first_high, second_low, second_high, result) {
        binary({func, instr}, "i64_ne", new Long(first_low, first_high), new Long(second_low, second_high), result);
    },
    i64_lt_s: function (func, instr, first_low, first_high, second_low, second_high, result) {
        binary({func, instr}, "i64_lt_s", new Long(first_low, first_high), new Long(second_low, second_high), result);
    },
    i64_lt_u: function (func, instr, first_low, first_high, second_low, second_high, result) {
        binary({func, instr}, "i64_lt_u", new Long(first_low, first_high), new Long(second_low, second_high), result);
    },
    i64_gt_s: function (func, instr, first_low, first_high, second_low, second_high, result) {
        binary({func, instr}, "i64_gt_s", new Long(first_low, first_high), new Long(second_low, second_high), result);
    },
    i64_gt_u: function (func, instr, first_low, first_high, second_low, second_high, result) {
        binary({func, instr}, "i64_gt_u", new Long(first_low, first_high), new Long(second_low, second_high), result);
    },
    i64_le_s: function (func, instr, first_low, first_high, second_low, second_high, result) {
        binary({func, instr}, "i64_le_s", new Long(first_low, first_high), new Long(second_low, second_high), result);
    },
    i64_le_u: function (func, instr, first_low, first_high, second_low, second_high, result) {
        binary({func, instr}, "i64_le_u", new Long(first_low, first_high), new Long(second_low, second_high), result);
    },
    i64_ge_s: function (func, instr, first_low, first_high, second_low, second_high, result) {
        binary({func, instr}, "i64_ge_s", new Long(first_low, first_high), new Long(second_low, second_high), result);
    },
    i64_ge_u: function (func, instr, first_low, first_high, second_low, second_high, result) {
        binary({func, instr}, "i64_ge_u", new Long(first_low, first_high), new Long(second_low, second_high), result);
    },
    f32_eq: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_eq", first, second, result);
    },
    f32_ne: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_ne", first, second, result);
    },
    f32_lt: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_lt", first, second, result);
    },
    f32_gt: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_gt", first, second, result);
    },
    f32_le: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_le", first, second, result);
    },
    f32_ge: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_ge", first, second, result);
    },
    f64_eq: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_eq", first, second, result);
    },
    f64_ne: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_ne", first, second, result);
    },
    f64_lt: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_lt", first, second, result);
    },
    f64_gt: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_gt", first, second, result);
    },
    f64_le: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_le", first, second, result);
    },
    f64_ge: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_ge", first, second, result);
    },
    i32_add: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_add", first, second, result);
    },
    i32_sub: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_sub", first, second, result);
    },
    i32_mul: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_mul", first, second, result);
    },
    i32_div_s: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_div_s", first, second, result);
    },
    i32_div_u: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_div_u", first, second, result);
    },
    i32_rem_s: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_rem_s", first, second, result);
    },
    i32_rem_u: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_rem_u", first, second, result);
    },
    i32_and: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_and", first, second, result);
    },
    i32_or: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_or", first, second, result);
    },
    i32_xor: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_xor", first, second, result);
    },
    i32_shl: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_shl", first, second, result);
    },
    i32_shr_s: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_shr_s", first, second, result);
    },
    i32_shr_u: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_shr_u", first, second, result);
    },
    i32_rotl: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_rotl", first, second, result);
    },
    i32_rotr: function (func, instr, first, second, result) {
        binary({func, instr}, "i32_rotr", first, second, result);
    },
    i64_add: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_add", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_sub: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_sub", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_mul: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_mul", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_div_s: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_div_s", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_div_u: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_div_u", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_rem_s: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_rem_s", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_rem_u: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_rem_u", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_and: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_and", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_or: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_or", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_xor: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_xor", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_shl: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_shl", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_shr_s: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_shr_s", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_shr_u: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_shr_u", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_rotl: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_rotl", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    i64_rotr: function (func, instr, first_low, first_high, second_low, second_high, result_low, result_high) {
        binary({func, instr}, "i64_rotr", new Long(first_low, first_high), new Long(second_low, second_high), new Long(result_low, result_high));
    },
    f32_add: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_add", first, second, result);
    },
    f32_sub: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_sub", first, second, result);
    },
    f32_mul: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_mul", first, second, result);
    },
    f32_div: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_div", first, second, result);
    },
    f32_min: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_min", first, second, result);
    },
    f32_max: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_max", first, second, result);
    },
    f32_copysign: function (func, instr, first, second, result) {
        binary({func, instr}, "f32_copysign", first, second, result);
    },
    f64_add: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_add", first, second, result);
    },
    f64_sub: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_sub", first, second, result);
    },
    f64_mul: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_mul", first, second, result);
    },
    f64_div: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_div", first, second, result);
    },
    f64_min: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_min", first, second, result);
    },
    f64_max: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_max", first, second, result);
    },
    f64_copysign: function (func, instr, first, second, result) {
        binary({func, instr}, "f64_copysign", first, second, result);
    },
    i32_load: function (func, instr, offset, align, addr, v) {
        load({func, instr}, "i32_load", {addr, offset, align}, v);
    },
    i32_load_8_s: function (func, instr, offset, align, addr, v) {
        load({func, instr}, "i32_load_8_s", {addr, offset, align}, v);
    },
    i32_load_8_u: function (func, instr, offset, align, addr, v) {
        load({func, instr}, "i32_load_8_u", {addr, offset, align}, v);
    },
    i32_load_16_s: function (func, instr, offset, align, addr, v) {
        load({func, instr}, "i32_load_16_s", {addr, offset, align}, v);
    },
    i32_load_16_u: function (func, instr, offset, align, addr, v) {
        load({func, instr}, "i32_load_16_u", {addr, offset, align}, v);
    },
    i64_load: function (func, instr, offset, align, addr, v_low, v_high) {
        load({func, instr}, "i64_load", {addr, offset, align}, new Long(v_low, v_high));
    },
    i64_load_8_s: function (func, instr, offset, align, addr, v_low, v_high) {
        load({func, instr}, "i64_load_8_s", {addr, offset, align}, new Long(v_low, v_high));
    },
    i64_load_8_u: function (func, instr, offset, align, addr, v_low, v_high) {
        load({func, instr}, "i64_load_8_u", {addr, offset, align}, new Long(v_low, v_high));
    },
    i64_load_16_s: function (func, instr, offset, align, addr, v_low, v_high) {
        load({func, instr}, "i64_load_16_s", {addr, offset, align}, new Long(v_low, v_high));
    },
    i64_load_16_u: function (func, instr, offset, align, addr, v_low, v_high) {
        load({func, instr}, "i64_load_16_u", {addr, offset, align}, new Long(v_low, v_high));
    },
    i64_load_32_s: function (func, instr, offset, align, addr, v_low, v_high) {
        load({func, instr}, "i64_load_32_s", {addr, offset, align}, new Long(v_low, v_high));
    },
    i64_load_32_u: function (func, instr, offset, align, addr, v_low, v_high) {
        load({func, instr}, "i64_load_32_u", {addr, offset, align}, new Long(v_low, v_high));
    },
    f32_load: function (func, instr, offset, align, addr, v) {
        load({func, instr}, "f32_load", {addr, offset, align}, v);
    },
    f64_load: function (func, instr, offset, align, addr, v) {
        load({func, instr}, "f64_load", {addr, offset, align}, v);
    },
    i32_store: function (func, instr, offset, align, addr, v) {
        store({func, instr}, "i32_store", {addr, offset, align}, v);
    },
    i32_store_8: function (func, instr, offset, align, addr, v) {
        store({func, instr}, "i32_store_8", {addr, offset, align}, v);
    },
    i32_store_16: function (func, instr, offset, align, addr, v) {
        store({func, instr}, "i32_store_16", {addr, offset, align}, v);
    },
    i64_store: function (func, instr, offset, align, addr, v_low, v_high) {
        store({func, instr}, "i64_store", {addr, offset, align}, new Long(v_low, v_high));
    },
    i64_store_8: function (func, instr, offset, align, addr, v_low, v_high) {
        store({func, instr}, "i64_store_8", {addr, offset, align}, new Long(v_low, v_high));
    },
    i64_store_16: function (func, instr, offset, align, addr, v_low, v_high) {
        store({func, instr}, "i64_store_16", {addr, offset, align}, new Long(v_low, v_high));
    },
    i64_store_32: function (func, instr, offset, align, addr, v_low, v_high) {
        store({func, instr}, "i64_store_32", {addr, offset, align}, new Long(v_low, v_high));
    },
    f32_store: function (func, instr, offset, align, addr, v) {
        store({func, instr}, "f32_store", {addr, offset, align}, v);
    },
    f64_store: function (func, instr, offset, align, addr, v) {
        store({func, instr}, "f64_store", {addr, offset, align}, v);
    },
};